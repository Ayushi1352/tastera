import Image from "next/image";

type IconName =
  | "chef"
  | "leaf"
  | "utensils"
  | "service"
  | "pin"
  | "phone"
  | "mail"
  | "clock"
  | "people";

function Icon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      >
        {name === "chef" && (
          <>
            <path d="M8 17.5a6.5 6.5 0 0 1-.2-13A8.3 8.3 0 0 1 23.2 7a5.4 5.4 0 0 1 .3 10.5v7H8v-7Z" />
            <path d="M12 24.5v3m8-3v3M11 17h10" />
          </>
        )}
        {name === "leaf" && (
          <>
            <path d="M27 5C14 4 5 9 5 19a8 8 0 0 0 8 8c10 0 15-9 14-22Z" />
            <path d="M5 27c4-7 9-11 17-16M12 20l-1-6m7 1 5-1" />
          </>
        )}
        {name === "utensils" && (
          <>
            <path d="M8 4v9m-4-9v5a4 4 0 0 0 8 0V4m-4 9v15m15-24c-3 3-4 7-4 12h7V4c-2 2-3 6-3 10v14" />
          </>
        )}
        {name === "service" && (
          <>
            <path d="M4 23h24M6 22a10 10 0 0 1 20 0M16 5v3m-9 1 2 2m14-2-2 2m-5-5 1-3" />
            <path d="M10 26h12" />
          </>
        )}
        {name === "pin" && (
          <>
            <path d="M25 13c0 7-9 15-9 15S7 20 7 13a9 9 0 1 1 18 0Z" />
            <circle cx="16" cy="13" r="3" />
          </>
        )}
        {name === "phone" && (
          <path d="m10 5 4 5-3 3a19 19 0 0 0 8 8l3-3 5 4-2 4c-.5 1-2 1.5-3 1C12 24 7 19 4 9c-.5-1 .2-2.5 1-3l5-1Z" />
        )}
        {name === "mail" && (
          <>
            <rect height="18" rx="2" width="24" x="4" y="7" />
            <path d="m5 9 11 8 11-8" />
          </>
        )}
        {name === "clock" && (
          <>
            <circle cx="16" cy="16" r="12" />
            <path d="M16 9v7l5 3" />
          </>
        )}
        {name === "people" && (
          <>
            <circle cx="12" cy="11" r="4" />
            <circle cx="23" cy="13" r="3" />
            <path d="M4 27a8 8 0 0 1 16 0m1-7a6 6 0 0 1 8 6" />
          </>
        )}
      </g>
    </svg>
  );
}

const menuItems = [
  {
    name: "Grilled Chicken Skewers",
    description: "Tender chicken pieces marinated in aromatic spices and grilled to perfection.",
    image: "/images/menu-chicken.webp",
    alt: "Grilled chicken skewers served with fresh greens",
  },
  {
    name: "Creamy Penne Pasta",
    description: "Rich and flavorful pasta tossed in a creamy, house-made sauce.",
    image: "/images/menu-pasta.webp",
    alt: "Creamy penne pasta with herbs",
  },
  {
    name: "Classic Veg Burger",
    description: "A wholesome, flavorful burger with fresh vegetables and signature sauce.",
    image: "/images/menu-burger.webp",
    alt: "Classic burger and golden fries",
  },
  {
    name: "Chocolate Lava Cake",
    description: "A rich chocolate delight with a warm, gooey center you’ll love.",
    image: "/images/menu-cake.webp",
    alt: "Chocolate lava cake topped with mint",
  },
];

const galleryImages = [
  { src: "/images/gallery-salmon.webp", alt: "Grilled salmon with vegetables" },
  { src: "/images/gallery-interior.webp", alt: "Warmly lit Tastera dining room" },
  { src: "/images/gallery-pasta.webp", alt: "Fresh pasta with herbs" },
  { src: "/images/gallery-dining.webp", alt: "Elegant restaurant table setting" },
  { src: "/images/gallery-dessert.webp", alt: "Chocolate dessert with mint" },
  { src: "/images/gallery-drink.webp", alt: "Fresh citrus drink" },
];

const reasons: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Expert Chefs",
    text: "Our skilled chefs craft every dish with passion, experience, and the finest ingredients.",
    icon: "chef",
  },
  {
    title: "Fresh Ingredients",
    text: "We use locally sourced, high-quality ingredients for rich, authentic flavors.",
    icon: "leaf",
  },
  {
    title: "Warm Ambiance",
    text: "A comfortable and stylish space perfect for family meals, gatherings, and special moments.",
    icon: "utensils",
  },
  {
    title: "Excellent Service",
    text: "Our friendly and attentive team ensures a smooth and memorable dining experience.",
    icon: "service",
  },
];

const testimonials = [
  {
    quote:
      "The food was absolutely delicious and the service was excellent. A perfect place for family dining!",
    name: "Rahul Mehta",
    role: "Food Enthusiast",
    initials: "RM",
  },
  {
    quote:
      "Amazing ambiance, great food, and a warm, welcoming staff. TASTERA is now our go-to restaurant!",
    name: "Priya Sharma",
    role: "Regular Guest",
    initials: "PS",
  },
  {
    quote:
      "A wonderful dining experience! The flavors, presentation, and hospitality were truly outstanding.",
    name: "Aman Verma",
    role: "Corporate Client",
    initials: "AV",
  },
];

const faqs = [
  {
    question: "Do I need a reservation to dine at your restaurant?",
    answer:
      "Reservations are recommended, especially on weekends and during peak hours, to ensure your preferred table and a seamless dining experience.",
  },
  {
    question: "What type of cuisine do you serve?",
    answer:
      "We serve a delicious mix of multi-cuisine favorites, freshly prepared with quality ingredients by our experienced chefs.",
  },
  {
    question: "Do you offer vegetarian and special diet options?",
    answer:
      "Yes. Our menu includes vegetarian choices, and our team is happy to help with dietary requests.",
  },
  {
    question: "Is there parking available at the restaurant?",
    answer:
      "Yes, convenient parking is available for guests visiting Tastera.",
  },
  {
    question: "Can I host a private event or party at your restaurant?",
    answer:
      "Absolutely. Contact us and our team will help plan a memorable gathering for your guests.",
  },
];

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a aria-label="Tastera home" className="brand" href="#home">
          <Image
            alt="Tastera Restaurant and Dining"
            className="brand-logo"
            height={70}
            priority
            src="/images/tastera-logo-dark.webp"
            width={210}
          />
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#about">About us</a>
          <a href="#menus">Our Menus</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">Faq</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <a className="button header-button" href="#reservation">
          <Icon name="utensils" />
          Book a Table
        </a>
      </header>

      <section aria-labelledby="hero-title" className="hero" id="home">
        <Image
          alt=""
          className="hero-image"
          fill
          priority
          sizes="(max-width: 700px) 100vw, 55vw"
          src="/images/hero-food.webp"
        />
        <div className="hero-content">
          <span className="hero-flourish">♧</span>
          <p className="hero-kicker">DELICIOUS FOOD &amp;</p>
          <h1 id="hero-title">
            MEMORABLE
            <span>DINING</span>
          </h1>
          <p className="hero-subtitle">MULTI-CUISINE RESTAURANT</p>
          <a className="button hero-button" href="#reservation">
            BOOK A TABLE <span aria-hidden="true">⟶</span>
          </a>
        </div>
      </section>

      <section aria-labelledby="about-title" className="about section-wrap" id="about">
        <div className="about-copy">
          <p className="label-line">
            <span>ABOUT US</span>
          </p>
          <h2 id="about-title">
            Delicious Food for a <em>Healthy Life</em>
          </h2>
          <p className="body-copy">
            At TASTERA, we believe great food brings people together. We serve fresh,
            high-quality ingredients crafted into flavorful dishes, creating a dining
            experience that’s both delicious and wholesome.
          </p>
          <div className="about-points">
            <div className="about-point">
              <span className="icon-tile">
                <Icon name="chef" />
              </span>
              <div>
                <h3>Quality Food</h3>
                <p>We use fresh, high-quality ingredients to serve delicious and wholesome meals.</p>
              </div>
            </div>
            <div className="about-point">
              <span className="icon-tile">
                <Icon name="leaf" />
              </span>
              <div>
                <h3>Sustainable Sourcing</h3>
                <p>We responsibly source our ingredients to ensure freshness, taste, and long-term quality.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image image-frame">
          <Image
            alt="Freshly grilled restaurant platter with seasonal vegetables"
            fill
            sizes="(max-width: 700px) 90vw, 46vw"
            src="/images/about-food.webp"
          />
        </div>
      </section>

      <section aria-labelledby="menus-title" className="menus section-wrap" id="menus">
        <SectionHeading eyebrow="OUR MENUS">
          Explore Our <em id="menus-title">Delicious Menus</em>
        </SectionHeading>
        <p className="section-intro">
          A tempting selection of freshly prepared dishes, crafted with quality ingredients
          <br className="desktop-break" /> to satisfy every taste.
        </p>
        <div className="menu-grid">
          {menuItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-image">
                <Image alt={item.alt} fill sizes="(max-width: 600px) 45vw, 25vw" src={item.image} />
              </div>
              <div className="menu-card-copy">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="why-title" className="why-us section-wrap" id="why-us">
        <SectionHeading eyebrow="WHY CHOOSE US">
          A Dining Experience <em id="why-title">Like No Other</em>
        </SectionHeading>
        <p className="section-intro">
          More than just a meal — we bring together great food, inviting ambiance,
          <br className="desktop-break" /> and exceptional service to make every visit special.
        </p>
        <div className="reasons-layout">
          <div className="reason-column">
            {reasons.slice(0, 2).map((reason) => (
              <article className="reason" key={reason.title}>
                <span className="icon-tile">
                  <Icon name={reason.icon} />
                </span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="feature-image">
            <Image
              alt="A signature Tastera grilled dish, served fresh"
              fill
              sizes="(max-width: 700px) 60vw, 30vw"
              src="/images/feature-food.webp"
            />
          </div>
          <div className="reason-column">
            {reasons.slice(2).map((reason) => (
              <article className="reason" key={reason.title}>
                <span className="icon-tile">
                  <Icon name={reason.icon} />
                </span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-title" className="gallery section-wrap" id="gallery">
        <SectionHeading eyebrow="OUR GALLERY">
          A Glimpse of Our <em id="gallery-title">Restaurant</em>
        </SectionHeading>
        <p className="section-intro">
          Explore our food, ambience, and dining experience through our gallery.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className={`gallery-image gallery-image-${index + 1}`} key={image.src}>
              <Image alt={image.alt} fill sizes="(max-width: 700px) 30vw, 25vw" src={image.src} />
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="testimonials-title"
        className="testimonials section-wrap"
        id="testimonials"
      >
        <SectionHeading eyebrow="TESTIMONIALS">
          What Our Guests Say <em id="testimonials-title">About Us</em>
        </SectionHeading>
        <p className="section-intro">
          Hear from our valued guests who have experienced the taste, service,
          <br className="desktop-break" /> and hospitality of TASTERA.
        </p>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card${index === 1 ? " featured-testimonial" : ""}`}
              key={testimonial.name}
            >
              <span aria-hidden="true" className="quote-mark">
                “
              </span>
              <p>{testimonial.quote}</p>
              <span className="quote-rule" />
              <div className="guest">
                <span aria-hidden="true" className={`guest-avatar guest-avatar-${index + 1}`}>
                  {testimonial.initials}
                </span>
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
                <span aria-label="5 out of 5 stars" className="stars">
                  ★★★★★
                </span>
              </div>
            </article>
          ))}
        </div>
        <div aria-hidden="true" className="slider-dots">
          <i />
          <i className="selected" />
          <i />
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="contact section-wrap"
        id="contact"
      >
        <SectionHeading eyebrow="CONTACT & RESERVATION">
          Reach Out &amp; <em id="contact-title">Reserve Your Table</em>
        </SectionHeading>
        <p className="section-intro">
          Have a question or planning a visit? Get in touch with us or book your table in advance.
        </p>
        <div className="contact-layout" id="reservation">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-lead">
              We’re always happy to help! Contact us for reservations, inquiries, or assistance.
            </p>
            <div className="contact-detail">
              <span className="contact-icon">
                <Icon name="pin" />
              </span>
              <p>
                <strong>Visit Us</strong>
                <span>123 Dining Street, Food City, New Delhi - 110001</span>
              </p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">
                <Icon name="phone" />
              </span>
              <p>
                <strong>Call Us</strong>
                <span>+91 98765 43210</span>
              </p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon">
                <Icon name="mail" />
              </span>
              <p>
                <strong>Email Us</strong>
                <span>info@tastera.com</span>
              </p>
            </div>
          </div>
          <div className="reservation-panel">
            <Image
              alt=""
              className="reservation-image"
              fill
              sizes="(max-width: 700px) 100vw, 70vw"
              src="/images/reservation-interior.webp"
            />
            <div className="reservation-content">
              <div className="reservation-title">
                <span aria-hidden="true">♨</span>
                <div>
                  <h3>Book a Table</h3>
                  <p>Reserve your table and enjoy an exceptional dining experience.</p>
                </div>
              </div>
              <form className="reservation-form">
                <label>
                  <span className="sr-only">Your name</span>
                  <input name="name" placeholder="♙  Your Name" />
                </label>
                <label>
                  <span className="sr-only">Phone number</span>
                  <input name="phone" placeholder="☎  Phone Number" type="tel" />
                </label>
                <label>
                  <span className="sr-only">Email address</span>
                  <input name="email" placeholder="✉  Email Address" type="email" />
                </label>
                <label>
                  <span className="sr-only">Select date</span>
                  <input aria-label="Select date" name="date" type="date" />
                </label>
                <label>
                  <span className="sr-only">Select time</span>
                  <select aria-label="Select time" defaultValue="">
                    <option disabled value="">
                      ◷ &nbsp; Select Time
                    </option>
                    <option>12:00 PM</option>
                    <option>6:00 PM</option>
                    <option>8:00 PM</option>
                  </select>
                </label>
                <label>
                  <span className="sr-only">Number of guests</span>
                  <select aria-label="Number of guests" defaultValue="">
                    <option disabled value="">
                      ♧ &nbsp; No. Of Guests
                    </option>
                    <option>1 - 2 Guests</option>
                    <option>3 - 4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </label>
                <button className="button reserve-button" type="button">
                  Reserve Your Table <span aria-hidden="true">⟶</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="faq section-wrap" id="faq">
        <SectionHeading eyebrow="FAQS">
          Frequently Asked <em id="faq-title">Questions</em>
        </SectionHeading>
        <p className="section-intro">
          Find quick answers to common queries about our restaurant, reservations, menu, and services.
        </p>
        <div className="faq-layout">
          <div className="faq-image">
            <Image
              alt="A freshly prepared Tastera signature dish"
              fill
              sizes="(max-width: 700px) 80vw, 30vw"
              src="/images/faq-food.webp"
            />
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Image
              alt="Tastera Restaurant and Dining"
              height={70}
              src="/images/tastera-logo-white.webp"
              width={210}
            />
            <p>A perfect blend of great food, warm hospitality, and a memorable dining experience.</p>
            <div aria-label="Social media" className="social-links">
              <a aria-label="Instagram" href="#contact">
                ◎
              </a>
              <a aria-label="Facebook" href="#contact">
                f
              </a>
              <a aria-label="YouTube" href="#contact">
                ▶
              </a>
              <a aria-label="LinkedIn" href="#contact">
                in
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#menus">Services</a>
            <a href="#gallery">Gallery</a>
          </div>
          <div className="footer-column">
            <h3>Useful Links</h3>
            <a href="#why-us">Why Choose Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>
            <p>
              <Icon name="pin" />
              123 Dining Street, Food City, New Delhi - 110001
            </p>
            <p>
              <Icon name="phone" />
              +91 98765 43210
            </p>
            <p>
              <Icon name="mail" />
              info@tastera.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 TASTERA Restaurant &amp; Dining. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
