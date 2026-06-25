"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Turnstile } from "@marsidev/react-turnstile";
import { CONFIG } from "@/lib/config";
const siteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
type Status = "idle" | "loading" | "success" | "error";
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  // phone: z
  //   .string()
  //   .trim()
  //   .min(10, "Phone number is too short"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters"),

service: z
  .string()
  .min(1, "Please select a service"),

  consent: z.literal(true, {
  errorMap: () => ({
    message:
      "You must accept the Privacy Policy to continue"
  })
}),

  order_timeframe: z.string().optional(),

  order_referer: z.string().optional(),
  news_checkbox:  z.boolean().optional()
});

type ContactForm = z.infer<typeof contactSchema>;

export function LandingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
   // phone: "",
    message: "",
    service: "",
    order_timeframe: "",
    order_referer: "",
    consent: false,
    news_checkbox:false,
    form_id: 7,
  });

  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<
  Partial<Record<keyof ContactForm, string>>
>({});
const [captchaToken, setCaptchaToken] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setFeedback("");
  setErrors({});

  const validation = contactSchema.safeParse(form);
console.log("FORM DATA", form);
console.log("VALIDATION", validation);
  if (!validation.success) {
    const firstErrorField = Object.keys(
  validation.error.flatten().fieldErrors
)[0];

const element = document.getElementById(firstErrorField);
if (element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  element.focus();
}
    const fieldErrors =
      validation.error.flatten().fieldErrors;

    setErrors({
      name: fieldErrors.name?.[0],
      email: fieldErrors.email?.[0],
    //  phone: fieldErrors.phone?.[0],
      message: fieldErrors.message?.[0],
      service: fieldErrors.service?.[0],
      order_timeframe: fieldErrors.order_timeframe?.[0],
      order_referer: fieldErrors.order_referer?.[0],
      consent: fieldErrors.consent?.[0],
      news_checkbox:fieldErrors.news_checkbox?.[0],
    });

    return;
  }
  if (!captchaToken) {
  setFeedback("Please verify captcha");
  return;
}
  setStatus("loading");

  try {
    const payload = {
      form_id: 9,
      captcha: captchaToken,
      fields: {
        "name-1": form.name,
        "email-1": form.email,
      //  "phone-1": form.phone,
        "textarea-1": form.message,
        "select-1": form.service,
        "select-2": form.order_timeframe,
        "select-3": form.order_referer,
        "consent-1": form.consent,
        "checkbox-1-3": form.news_checkbox
      }
    };

    const response = await fetch(CONFIG.leadEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setStatus("success");

      setFeedback(
        "Thank you! Your enquiry has been submitted successfully."
      );

      setForm({
        name: "",
        email: "",
       // phone: "",
        message: "",
        service: "",
        order_timeframe: "",
        order_referer: "",
        consent: false,
        news_checkbox:false,
        form_id: 9
      });

      setErrors({});
    } else {
      setStatus("error");

      setFeedback(
        result.message ||
          "Unable to submit your enquiry."
      );
    }
  } catch (error) {
    console.error(error);

    setStatus("error");

    setFeedback(
      "Network error. Please try again later."
    );
  }
};

  return (
    <>
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-border p-6 shadow-lg">
      <h2 className="pb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
        Reach <span className="text-gradient-orange">Out Today</span></h2>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="relative">
  <label
    htmlFor="name"
    className="
      absolute
      -top-2.5
      left-3
      bg-background
      px-1
      text-xs
      font-medium
      text-muted-foreground
      z-10
    "
  >
    Full Name <span className="text-red-500">*</span>
  </label>

  <Input
    id="name"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
     className={cn(
    "h-16 px-4",
    errors.name &&
      "border-red-500 focus-visible:ring-red-500"
  )}
  />
  {errors.name && (
  <p className="text-red-500 text-sm mt-1">
    {errors.name}
  </p>
)}
</div>

         <div className="relative">
  <label
    htmlFor="email"
    className="
      absolute
      -top-2.5
      left-3
      bg-background
      px-1
      text-xs
      font-medium
      text-muted-foreground
      z-10
    "
  >
    Email Address <span className="text-red-500">*</span>
  </label>

  <Input
    id="email"
    type="email"
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    className={cn(
    "h-16 px-4",
    errors.email &&
      "border-red-500 focus-visible:ring-red-500"
  )}
  />
  {errors.email && (
  <p className="text-red-500 text-sm mt-1">
    {errors.email}
  </p>
)}
</div>
        </div>

       <div className="relative mb-10">
  <label
    htmlFor="service"
    className="
      absolute
      -top-2.5
      left-3
      bg-background
      px-1
      text-xs
      font-medium
      text-muted-foreground
      z-10
    "
  >
    Choose Services <span className="text-red-500">*</span>
  </label>

  <select
    id="service"
    value={form.service}
    onChange={(e) =>
      setForm({ ...form, service: e.target.value })
    }
    className={cn(
    "w-full h-16 rounded-lg border border-border bg-background px-4 text-xs text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
    errors.service &&
      "border-red-500 focus-visible:ring-red-500"
  )}>
    <option value="">
      Select Choose Services
    </option>

    <option value="website-development">
      Website Development
    </option>

    <option value="wordpress-development">
      WordPress Development
    </option>

    <option value="nextjs-development">
      Next.js Development
    </option>

    <option value="seo">
      SEO Services
    </option>

    <option value="ecommerce">
      eCommerce Development
    </option>

    <option value="ai">
      AI Automation
    </option>

    <option value="other">
      Other
    </option>
  </select>
  {errors.service && (
  <p className="text-red-500 text-sm mt-1">
    {errors.service}
  </p>
)}
</div>
        <div className="relative mb-10">
  <label
    htmlFor="message"
    className="
      absolute
      -top-2.5
      left-3
      bg-background
      px-1
      text-xs
      font-medium
      text-muted-foreground
      z-10
    "
  >
    Tell Us About Your Project
  </label>

  <Textarea
    id="message"
    rows={12}
    value={form.message}
    onChange={(e) => setForm({ ...form, message: e.target.value })}
     className={cn(
    "pt-6 h-40 px-4 resize-none text-xs text-muted-foreground",
    errors.message &&
      "border-red-500 focus-visible:ring-red-500"
  )}
  />
   {errors.message && (
  <p className="text-red-500 text-sm mt-1">
    {errors.message}
  </p>
)}
</div>

 <div className="relative mb-10">
  <label
    htmlFor="order_timeframe"
    className="
      absolute
      -top-2.5
      left-3
      bg-background
      px-1
      text-xs
      font-medium
      text-muted-foreground
      z-10
    "
  >
    Project Time Frame <span className="text-red-500">*</span>
  </label>

  <select
    id="order_timeframe"
    value={form.order_timeframe}
    onChange={(e) =>
      setForm({ ...form, order_timeframe: e.target.value })
    }
    className="w-full h-16 rounded-lg border border-border bg-background px-4 text-xs text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20
   focus:border-primary
    "
  >
    <option value="">
      How time sensitive is your project?
    </option>

    <option value="asap">
     I need it ASAP
    </option>

    <option value="i=am-not-in-rush">
      I’m not in a rush
    </option>
  </select>
</div>
 <div className="relative mb-10">
  <label
    htmlFor="order_referer"
    className="absolute -top-2.5 left-3 bg-background px-1 text-xs font-medium text-muted-foreground z-10 ">
   Referrer <span className="text-red-500">*</span>
  </label>

  <select
    id="order_referer"
    value={form.order_referer}
    onChange={(e) =>
      setForm({ ...form, order_referer: e.target.value })
    }
    className="w-full h-16 rounded-lg border border-border bg-background px-4 text-xs text-muted-foreground focus:outline-none focus:ring-2
focus:ring-primary/20 focus:border-primary ">
    <option value="">
      How did you hear about us?
    </option>

    <option value="Paid Advertising">
     Paid Advertising
    </option>

    <option value="Organic Search">
      Organic Search
    </option>
    <option value="Returning Customer">
      Returning Customer
    </option>
    <option value="Referral">
      Referral
    </option>
    <option value="Other">
      Other
    </option>
    
  </select>
</div>
<div className="space-y-2">
  <div
    className={`flex items-start gap-3 rounded-md`}
  >
    <input
      type="checkbox"
      id="consent"
      checked={form.consent}
      onChange={(e) =>
    setForm({
      ...form,
      consent: e.target.checked
    })
  }
      className={`mt-1 h-4 w-4 ${
        errors.consent ? "accent-red-500" : ""
      }`}
    />

    <label
      htmlFor="consent"
      className="text-sm text-muted-foreground leading-relaxed flex-1"
    >
      I agree to be contacted by Atulya IT Solutions regarding my
      inquiry. I understand that my information will be used solely
      for communication purposes and will not be shared with third
      parties.
    </label>
  </div>

  {errors.consent && (
    <p className="text-sm text-red-500">
      {errors.consent}
    </p>
  )}
</div>
<div className="flex items-start gap-3">
  <input
    type="checkbox"
     checked={form.news_checkbox}
  onChange={(e) =>
    setForm({
      ...form,
      news_checkbox: e.target.checked,
    })
  }
    className="mt-1 h-4 w-4"
  />

  <label
    htmlFor="news_checkbox"
    className="text-sm text-muted-foreground leading-relaxed"
  >
    I want to receive news and service updates from Atulya IT Solutions.
  </label>
</div>
        <Button
  type="submit"
  disabled={status === "loading"}
  className=""
>
  {status === "loading" ? (
    <>
      <svg
        className="mr-2 h-4 w-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      Please wait...
    </>
  ) : (
    "Submit"
  )}
</Button>

        {feedback && (
          <p
            role="status"
            className={
              status === "success"
                ? "text-sm text-green-600"
                : "text-sm text-red-600"
            }
          >
            {feedback}
          </p>
        )}
        <Turnstile
  siteKey={CONFIG.turnstileSiteKey!}
  onSuccess={(token) => setCaptchaToken(token)}
/>
      </form>
    </div>
    </>
  );
}

