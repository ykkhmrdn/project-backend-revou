const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedTeamData() {
  const teamMembers = [
    {
      name: "Diana",
      role: "Quality Assurance",
      socialMedia: {
        instagram: "https://www.instagram.com/dianamsrh",
        linkedin: "https://www.linkedin.com/in/diana-masruroh",
        github: "https://github.com/dianamsrh"
      },
      image: "../Img/team/diana.jpeg"
    },
    {
      name: "Yoko",
      role: "Front End Engineer",
      socialMedia: {
        instagram: "https://www.instagram.com/zyxkoo",
        linkedin: "https://www.linkedin.com/in/yoko-khmrdn",
        github: "https://github.com/zyxkoo15"
      },
      image: "../Img/team/yoko.jpg"
    },
    {
      name: "Septi",
      role: "Quality Assurance",
      socialMedia: {
        instagram: "https://www.instagram.com/septianaanf",
        linkedin: "https://www.linkedin.com/in/septiana-aulia-nur-fadlina-b72564284",
        github: "https://github.com/septianaanf"
      },
      image: "../Img/team/septi.jpeg"
    },
    {
      name: "Prada",
      role: "Back End Engineer",
      socialMedia: {
        instagram: "https://www.instagram.com/pradadipa",
        linkedin: "https://www.linkedin.com/in/prada-dipa-014284210",
        github: "https://github.com/pradadipa"
      },
      image: "../Img/team/prada.png"
    },
    {
      name: "Hilda",
      role: "Back End Engineer",
      socialMedia: {
        instagram: "https://www.instagram.com/hilwoody",
        linkedin: "https://www.linkedin.com/in/hildaayumeylia",
        github: "https://github.com/myhilda"
      },
      image: "../Img/team/hilda.jpeg"
    }
  ];
  for (const member of teamMembers) {
    // Hanya masukkan kolom yang ada dalam data anggota tim
    const data = {
      name: member.name,
      role: member.role,
      image: member.image
    };

    if (member.socialMedia) {
      if (member.socialMedia.instagram) {
        data.instagram = member.socialMedia.instagram;
      }
      if (member.socialMedia.linkedin) {
        data.linkedin = member.socialMedia.linkedin;
      }
      if (member.socialMedia.github) {
        data.github = member.socialMedia.github;
      }
    }

    const createdMember = await prisma.team.create({
      data
    });

    console.log('Data anggota tim telah dibuat:', createdMember);
  }

  // Pastikan Anda memiliki ini jika Anda ingin melakukan disconnect dari Prisma
  await prisma.$disconnect();
}

seedTeamData()
  .catch((error) => {
    console.error('Error seeding team data:', error);
  });