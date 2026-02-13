import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import authIllustration from "@/assets/auth-illustration.jpg";

type Role = "volunteer" | "ngo";

const Register = () => {
  const [role, setRole] = useState<Role>("volunteer");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    skills: "",
    location: "",
    bio: "",
    organization_name: "",
    organization_description: "",
    website_url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...form,
      role,
      skills: form.skills.split(",").map((s) => s.trim()).filter(Boolean),
    };
    console.log("Register payload:", payload);
    alert("Registration submitted! (No backend connected yet)");
  };

  return (
    <div className="min-h-screen flex font-body">
      {/* Left illustration panel */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden bg-primary">
        <img
          src={authIllustration}
          alt="SkillBridge community"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 px-12 text-primary-foreground">
          <h1 className="text-5xl font-heading font-bold mb-4">SkillBridge</h1>
          <p className="text-xl opacity-90 max-w-md">
            Connect your skills with NGOs that need them. Make a real impact in your community.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-foreground">Create Account</h2>
            <p className="text-muted-foreground mt-2">Join SkillBridge as a volunteer or NGO</p>
          </div>

          {/* Role selector */}
          <div className="flex gap-3 mb-6">
            <button
              type="button"
              onClick={() => setRole("volunteer")}
              className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all font-medium ${
                role === "volunteer"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40"
              }`}
            >
              <Users className="w-5 h-5" />
              Volunteer
            </button>
            <button
              type="button"
              onClick={() => setRole("ngo")}
              className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all font-medium ${
                role === "ngo"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40"
              }`}
            >
              <Building2 className="w-5 h-5" />
              NGO
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <Label htmlFor="skills">Skills (comma separated)</Label>
              <Input id="skills" name="skills" value={form.skills} onChange={handleChange} placeholder="Design, Teaching, Coding" />
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" value={form.location} onChange={handleChange} placeholder="City, Country" />
            </div>

            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" name="bio" value={form.bio} onChange={handleChange} placeholder="Tell us about yourself..." rows={3} />
            </div>

            {/* NGO-specific fields */}
            {role === "ngo" && (
              <div className="space-y-4 pt-2 border-t border-border">
                <p className="text-sm font-medium text-accent pt-2">NGO Details</p>
                <div>
                  <Label htmlFor="organization_name">Organization Name</Label>
                  <Input id="organization_name" name="organization_name" value={form.organization_name} onChange={handleChange} placeholder="Your NGO" required />
                </div>
                <div>
                  <Label htmlFor="organization_description">Organization Description</Label>
                  <Textarea id="organization_description" name="organization_description" value={form.organization_description} onChange={handleChange} placeholder="What does your NGO do?" rows={3} />
                </div>
                <div>
                  <Label htmlFor="website_url">Website URL</Label>
                  <Input id="website_url" name="website_url" type="url" value={form.website_url} onChange={handleChange} placeholder="https://your-ngo.org" />
                </div>
              </div>
            )}

            <Button type="submit" className="w-full mt-2" size="lg">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
