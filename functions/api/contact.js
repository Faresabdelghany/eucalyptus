export async function onRequestPost(context) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    const body = await context.request.json();
    const { name, email, phone, service, message } = body;

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
      return new Response(
        JSON.stringify({ success: false, errors }),
        { status: 400, headers }
      );
    }

    // Log the submission (replace with email/database integration later)
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      service: service?.trim() || "",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your inquiry! We will get back to you within 1-2 business days.",
      }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
      }),
      { status: 500, headers }
    );
  }
}

// Handle CORS preflight requests
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
