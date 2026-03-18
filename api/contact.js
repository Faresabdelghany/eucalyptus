export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Server-side validation
    const errors = {};

    if (!name || !name.trim()) {
      errors.name = "Name is required";
    }

    if (!email || !email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (phone && !/^[\d\s()+-]{7,20}$/.test(phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!message || !message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Send email via Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Eucalyptus Website <info@eucalyptus-woodpallet.com>",
        to: ["info@eucalyptus-woodpallet.com"],
        reply_to: email.trim(),
        subject: `New Contact Form: ${service?.trim() || "General Inquiry"} — from ${name.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2d5016; border-bottom: 2px solid #2d5016; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 120px;">Name</td>
                <td style="padding: 8px 12px;">${name.trim()}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 8px 12px;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone</td>
                <td style="padding: 8px 12px;">${phone?.trim() || "Not provided"}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 8px 12px; font-weight: bold; color: #555;">Service</td>
                <td style="padding: 8px 12px;">${service?.trim() || "Not specified"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-left: 4px solid #2d5016; border-radius: 4px;">
              <strong style="color: #555;">Message:</strong>
              <p style="margin: 8px 0 0; line-height: 1.6;">${message.trim()}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #999;">
              Submitted on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh", dateStyle: "full", timeStyle: "short" })}
            </p>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Resend API error:", errorData);
      throw new Error("Failed to send email");
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for your inquiry! We will get back to you within 1-2 business days.",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    });
  }
}
