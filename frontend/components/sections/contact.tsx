"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    // Forminator values
    data.append("action", "forminator_submit_form_custom-forms");
    data.append("form_id", "7"); // <-- apna Form ID

    // Replace these with actual Forminator field IDs
    data.append("name-1", form.name);
    data.append("email-1", form.email);
    data.append("phone-1", form.phone);
    data.append("textarea-1", form.message);

    try {
      const response = await fetch(
        "http://localhost/atulyaitsolutions.com/wp-admin/admin-ajax.php",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.text();
      console.log(result);

      alert("Form submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="pb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
        Reach Out <span className="text-gradient-orange">Today</span></h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="name-1"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <Input
            id="email-1"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <Input
          id="phone-1"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <Textarea
          id="textarea-1"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <Button type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
}
