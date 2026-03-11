import { GlassCard } from "../components/GlassCard";
import { User, Users } from "lucide-react";

const ALUMNI_REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfK_6PO06z1XT7sT-phqQ7kU4UqxhocGx2CogZ97cXBIKb4SA/viewform?usp=publish-editor";
const PARENTS_REGISTRATION_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfK_6PO06z1XT7sT-phqQ7kU4UqxhocGx2CogZ97cXBIKb4SA/viewform?usp=publish-editor";

export function Register() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-neon-blue/10 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl text-foreground mb-4" style={{ fontWeight: 800 }}>
              Register <span className="text-neon-blue">Now</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose one section below to continue your registration.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 pb-16">
            <GlassCard className="p-8">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/20 text-white flex items-center justify-center mb-5">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl text-foreground mb-3" style={{ fontWeight: 700 }}>
                Alumni Registration
              </h2>
              <p className="text-muted-foreground mb-6">
                Dedicated registration for alumni who want to attend and participate in ANTAHPRAGNYA.
              </p>
              <a
                href={ALUMNI_REGISTRATION_LINK}
                className="inline-flex px-5 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                Go to Alumni Form
              </a>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 text-neon-purple flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl text-foreground mb-3" style={{ fontWeight: 700 }}>
                Parents & Others Registration
              </h2>
              <p className="text-muted-foreground mb-6">
                Registration for parents and other people related to the student community.
              </p>
              <a
                href={PARENTS_REGISTRATION_LINK}
                className="inline-flex px-5 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                Go to Parents/Others Form
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
