export default function AboutPage() {
  const teamMembers = [
    { name: "Founder", role: "Founder", image: "/images/8.png" },
    { name: "President", role: "President", image: "/images/8.png" },
    { name: "Member 1", role: "Member", image: "/images/8.png" },
    { name: "Member 2", role: "Member", image: "/images/8.png" },
    { name: "Member 3", role: "Member", image: "/images/8.png" },
    { name: "Member 4", role: "Member", image: "/images/member4.jpg" },
  ];

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About NAMAH MUN</h1>
          <p className="text-muted-foreground">Learn more about our Model United Nations organization</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p>
            NAMAH Model United Nations was founded with the vision of creating a platform for young diplomats to develop
            their skills in international relations, public speaking, and conflict resolution. Since our inception, we
            have organized numerous successful conferences and trained hundreds of delegates.
          </p>

          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            Our mission is to create positive change through community engagement and support. We believe in the power
            of community and the impact that can be made when people come together for a common cause.
          </p>

          <h2 className="text-2xl font-bold">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
