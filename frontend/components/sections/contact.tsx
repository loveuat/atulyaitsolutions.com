"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WP_ENDPOINT =
  "https://aisback.atulyaitsolutions.com/wp-json/ais/v1/lead";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    form_id: 7,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch( WP_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      console.log("[v0] WP response:", result, "status:", response.status);

      if (response.ok && result?.success) {
        setStatus("success");
        setFeedback("Thanks! Your message has been sent.");
        setForm({ name: "", email: "", phone: "", message: "",form_id: 7});
      } else {
        setStatus("error");
        setFeedback(
          result?.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("[v0] Submit error:", error);
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="pb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
        Reach Out Today
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <Input
          id="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
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
      </form>
    </div>
  );
}