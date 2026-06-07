"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="Full Name"
            className="h-12"
          />

          <Input
            type="email"
            placeholder="Email Address"
            className="h-12"
          />
        </div>

        <Input
          type="text"
          placeholder="Subject"
          className="h-12"
        />

        <Textarea
          placeholder="Tell us about your project..."
          className="min-h-[150px]"
        />

        <Button
          type="submit"
          className="w-full h-12 bg-orange-500 hover:bg-orange-600"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
