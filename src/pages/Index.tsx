import { ArrowRight, BookOpen, Users, Award, Sparkles, GraduationCap, Globe, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-indian-teachers.jpg";
import logoBirmingham from "@/assets/logo-birmingham.png";
import logoCambridge from "@/assets/logo-cambridge.png";
import logoHelsinki from "@/assets/logo-helsinki.png";
import logoWindsor from "@/assets/logo-windsor.png";

const Index = () => {
  const courses = [
    {
      title: "PGDE-I + IBEC",
      subtitle: "For aspiring teachers",
      description: "Step into global classrooms with integrated pedagogical and leadership training.",
      icon: GraduationCap,
    },
    {
      title: "MA in Education",
      subtitle: "For working educators",
      description: "Advance into academic, leadership, or research roles with global recognition.",
      icon: Award,
    },
    {
      title: "Cambridge CIDTL",
      subtitle: "For classroom leaders",
      description: "Elevate classroom impact with evidence-based, Cambridge-backed frameworks.",
      icon: BookOpen,
    },
    {
      title: "PGD in Early Childhood",
      subtitle: "For early learning specialists",
      description: "Lead early learning with creative pedagogy and developmental insight.",
      icon: Sparkles,
    },
  ];

  const learningPillars = [
    {
      title: "Inquiry & Reflection",
      description: "Explore critical pedagogy through reflective journaling and research",
      icon: BookOpen,
    },
    {
      title: "Mentorship & Practicum",
      description: "Learn from master educators through real classroom immersion",
      icon: Users,
    },
    {
      title: "AI-Collaborative Design",
      description: "Design learning experiences informed by AI tools and human insight",
      icon: Sparkles,
    },
    {
      title: "Leadership & Portfolio",
      description: "Build your professional identity through curated portfolio work",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      question: "Who is ITARI for?",
      answer: "ITARI is designed for aspiring teachers, in-service educators, and school leaders seeking internationally recognized credentials and leadership development. Whether you're just starting your teaching journey or looking to advance into leadership roles, we have pathways tailored to your goals.",
    },
    {
      question: "What makes ITARI different?",
      answer: "ITARI combines global credentials from IB, Cambridge, and Birmingham City University with mentorship from experienced educators. Our approach blends theory, practice, and reflection through AI-collaborative design and real classroom immersion, ensuring you develop both pedagogical expertise and leadership capacity.",
    },
    {
      question: "What are the eligibility requirements?",
      answer: "Requirements vary by program. Generally, aspiring teachers need a bachelor's degree in any field, while in-service educators should have teaching experience. Contact our counsellors for specific program requirements and personalized guidance.",
    },
    {
      question: "How long are the programs?",
      answer: "Program durations range from 6 months to 2 years depending on the pathway you choose. All programs are designed with flexibility to accommodate working professionals while ensuring comprehensive learning and skill development.",
    },
    {
      question: "What career outcomes can I expect?",
      answer: "ITARI alumni achieve a 90%+ placement record in international schools. Graduates advance into roles such as curriculum coordinators, IB programme heads, educational consultants, and school leadership positions globally.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-glow/70" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Lead the Future of Education
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Earn globally recognized credentials and step into leadership roles where teaching meets innovation. 
            Shape the next generation with the insight, adaptability, and confidence to thrive in an AI-powered world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroSecondary" size="xl">
              See Courses
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">
            Trusted by Global Education Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            <div className="w-48 h-24 bg-card rounded-lg shadow-soft flex items-center justify-center p-4 hover:shadow-medium transition-smooth">
              <img src={logoBirmingham} alt="Birmingham City University" className="w-full h-full object-contain" />
            </div>
            <div className="w-48 h-24 bg-card rounded-lg shadow-soft flex items-center justify-center p-4 hover:shadow-medium transition-smooth">
              <img src={logoCambridge} alt="Cambridge Assessment International Education" className="w-full h-full object-contain" />
            </div>
            <div className="w-48 h-24 bg-card rounded-lg shadow-soft flex items-center justify-center p-4 hover:shadow-medium transition-smooth">
              <img src={logoHelsinki} alt="University of Helsinki" className="w-full h-full object-contain" />
            </div>
            <div className="w-48 h-24 bg-card rounded-lg shadow-soft flex items-center justify-center p-4 hover:shadow-medium transition-smooth">
              <img src={logoWindsor} alt="University of Windsor" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ITARI */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Leadership Starts Here
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ITARI, education goes beyond pedagogy - it's a journey into purposeful leadership. 
                Gain global educator credentials from leading boards like IB, Cambridge, and Birmingham City University. 
                Learn through mentorship, research, and reflection, guided by master educators who've led classrooms 
                and institutions worldwide. Join a community that's redefining what it means to teach, lead, and 
                influence the future of learning.
              </p>
              <Button variant="default" size="lg" className="group">
                Discover Why ITARI
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Global Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">IB, Cambridge & BCU credentials</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-smooth mt-8">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Master Mentors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Learn from global educators</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">90%+ Placement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">International school career paths</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-smooth mt-8">
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Global Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect with educators worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-background" id="courses">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Courses That Match Your Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're an aspiring teacher, an in-service professional, or an educator ready to lead, 
              ITARI offers flexible learning routes designed around your goals. Each course blends theory, 
              practice, and reflection, helping you build competencies that open doors to international schools 
              and leadership positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-strong transition-bounce hover:-translate-y-2 animate-fade-in-up bg-gradient-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <course.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-smooth" />
                  <div className="inline-block px-3 py-1 bg-accent/30 text-accent-foreground text-xs rounded-full mb-2">
                    {course.subtitle}
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" className="group">
              See Course Details
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Model */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How You Learn With ITARI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learning at ITARI is designed around doing, reflecting, and leading. You'll explore critical inquiry, 
              practice real-world teaching, and design learning informed by AI tools and human insight. Each step - 
              from reflective journaling to classroom immersion - builds your capacity to think deeply, act with 
              intention, and lead with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {learningPillars.map((pillar, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto bg-gradient-accent rounded-full flex items-center justify-center shadow-medium hover:scale-110 transition-bounce">
                  <pillar.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership in Action
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              ITARI alumni don't just teach - they lead learning communities. From curriculum coordinators to 
              IB programme heads, our graduates are driving innovation globally. Your ITARI journey ends with 
              more than a certificate - it begins with career acceleration, mentorship, and lasting leadership.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-card rounded-xl shadow-soft">
                <div className="text-5xl font-bold text-primary mb-2">90%+</div>
                <div className="text-muted-foreground">Placement Rate</div>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Partner Schools</div>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-soft">
                <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Alumni Worldwide</div>
              </div>
            </div>
            <Button variant="hero" size="xl" className="group">
              Join the Next Cohort
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Voices of Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from educators who transformed their careers through ITARI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    SP
                  </div>
                  <div>
                    <CardTitle className="text-lg">Priya Sharma</CardTitle>
                    <CardDescription>IB Coordinator, Singapore</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "ITARI didn't just give me credentials - it gave me the confidence to lead. The mentorship 
                  and practical experience prepared me to step into an IB coordinator role at one of Singapore's 
                  top international schools."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    RK
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rajesh Kumar</CardTitle>
                    <CardDescription>Head of Curriculum, Dubai</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "The Cambridge CIDTL programme transformed how I approach teaching and learning. I now lead 
                  curriculum design for a network of schools across the Middle East, applying evidence-based 
                  frameworks I learned at ITARI."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    AM
                  </div>
                  <div>
                    <CardTitle className="text-lg">Anita Mehta</CardTitle>
                    <CardDescription>Principal, International School</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "ITARI's MA in Education opened doors I never thought possible. Within two years of graduating, 
                  I moved from classroom teaching to leading an entire school. The leadership training was 
                  invaluable."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              See Alumni Stories
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center animate-fade-in">
              Have Questions? Get Answers.
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Find everything you need to start your ITARI journey
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Check Eligibility
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ITARI</h3>
              <p className="text-background/80 text-sm">
                Indus Training and Research Institute - Leading the future of education
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>PGDE-I + IBEC</li>
                <li>MA in Education</li>
                <li>Cambridge CIDTL</li>
                <li>PGD Early Childhood</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Alumni Stories</li>
                <li>Insights & Articles</li>
                <li>Webinars</li>
                <li>Career Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Contact Us</li>
                <li>Book a Consultation</li>
                <li>Visit Campus</li>
                <li>Partner With Us</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
            <p>&copy; 2025 ITARI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
