"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db, collection, addDoc } from "../join-us/firebaseConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function JoinUsPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    institution: "",
    department: [],
    resume: "",
    motivation: "",
    availability: "",
    experience: "",
    referrals: "",
    socialLinks: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDepartmentChange = (department) => {
    setFormData((prev) => {
      const updatedDepartments = prev.department.includes(department)
        ? prev.department.filter((d) => d !== department)
        : [...prev.department, department];
      return { ...prev, department: updatedDepartments };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    try {
      await addDoc(collection(db, "munApplications"), formData);
      alert("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        institution: "",
        department: [],
        resume: "",
        motivation: "",
        availability: "",
        experience: "",
        referrals: "",
        socialLinks: "",
        agreedToTerms: false,
      });
      router.push("/join-us");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-2xl space-y-8 border rounded-lg p-6 bg-white shadow">
        <h1 className="text-3xl font-bold text-center">Join NAMAH MUN</h1>
        <p className="text-center text-gray-600">Become a part of our MUN community</p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" required value={formData.fullName} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={formData.email} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" required value={formData.phone} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="location">Your Location (Country - State - City)</Label>
            <Input id="location" required value={formData.location} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="institution">Current Institution/Organization</Label>
            <Input id="institution" required value={formData.institution} onChange={handleChange} />
          </div>

          <div>
            <Label>Department of Interest</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Delegate Affairs",
                "Sponsorship & Collaborations",
                "Public Relations & Outreach",
                "Marketing & Social Media",
                "Content & Research",
                "Graphics & Design",
                "Logistics & Operations",
                "Hospitality & Management",
                "Event Coordination",
              ].map((department) => (
                <div key={department} className="flex items-center space-x-2">
                  <Checkbox
                    id={department.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                    checked={formData.department.includes(department)}
                    onCheckedChange={() => handleDepartmentChange(department)}
                  />
                  <Label htmlFor={department.toLowerCase().replace(/[^a-z0-9]/g, "-")}>{department}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="resume">Resume (Google Drive Link)</Label>
            <Input id="resume" type="url" required value={formData.resume} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="motivation">Why do you want to join Namah Group?</Label>
            <Textarea id="motivation" rows={4} required value={formData.motivation} onChange={handleChange} />
          </div>

          <div>
            <Label>How many hours a week can you contribute?</Label>
            <Select
              value={formData.availability}
              onValueChange={(value) => setFormData({ ...formData, availability: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-4 hrs">2-4 hrs</SelectItem>
                <SelectItem value="4-6 hrs">4-6 hrs</SelectItem>
                <SelectItem value="Full Availability">Full Availability</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="experience">Relevant Experience</Label>
            <Textarea id="experience" rows={2} required value={formData.experience} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="referrals">Refer 2 Friends</Label>
            <Input id="referrals" required value={formData.referrals} onChange={handleChange} />
          </div>

          <div>
            <Label htmlFor="socialLinks">Your Social Links</Label>
            <Input id="socialLinks" required value={formData.socialLinks} onChange={handleChange} />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="agreedToTerms"
              checked={formData.agreedToTerms}
              onCheckedChange={() => setFormData({ ...formData, agreedToTerms: !formData.agreedToTerms })}
            />
            <Label htmlFor="agreedToTerms" className="text-sm">
              I understand that this is a voluntary opportunity with Namah Group and agree to contribute actively.
            </Label>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
}
