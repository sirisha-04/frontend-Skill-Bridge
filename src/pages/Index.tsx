import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Building2, ArrowRight } from "lucide-react";
import authIllustration from "@/assets/auth-illustration.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center font-body">
      <img src={authIllustration} alt="SkillBridge" className="w-48 h-48 rounded-2xl object-cover mb-8 shadow-lg" />
      <h1 className="text-5xl font-heading font-bold text-foreground mb-4">SkillBridge</h1>
      <p className="text-lg text-muted-foreground max-w-lg mb-10">
        Connect skilled volunteers with NGOs for meaningful opportunities. Make a real impact in your community.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="gap-2">
          <Link to="/register">
            <Users className="w-5 h-5" />
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link to="/login">
            <Building2 className="w-5 h-5" />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
