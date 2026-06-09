# IIPM WordPress Conversion Blueprint

## Page Structure

- Home: brand positioning, primary calls to action, featured programmes, membership path, e-learning path, verification path.
- Programmes: searchable/filterable catalogue of certification courses.
- Course Detail Template: one reusable template for each programme with overview, outcomes, modules, cohort date, fee, delivery mode and apply button.
- 2026 Executive Pathway Pages: Strategic Project Management and Governance, and Strategic HRM, Administration and Performance, using the official 2026 flyer details.
- Membership: individual and corporate membership levels, benefits, eligibility, application and renewal links.
- E-Learning: learner dashboard concept for courses, quizzes, resources, progress and certificates.
- Login / Portal Access: one central login page routing learners, individual members, corporate representatives and admins to the correct dashboard.
- Learner Portal: course progress, live sessions, assessments, resources and certificates after login.
- Membership Portal: member status, designatory letters, CPD record, subscriptions, documents, renewal and upgrade requests after login.
- Verification: private certificate/member lookup. Do not publish full member lists or payment status.
- Corporate Training: training needs request, custom proposal flow and team LMS groups.
- About and Standards: institute profile, governance, faculty, approvals, partnerships and proof records.
- Apply/Contact: one intake form routed by interest type.

## Recommended WordPress Stack

- Theme: Kadence, Astra, Blocksy or a custom block theme.
- Page builder: native WordPress blocks, Elementor or Spectra.
- LMS: LearnDash or Tutor LMS.
- Membership: Paid Memberships Pro, MemberPress or WooCommerce Memberships.
- Payments: WooCommerce with Paystack, Flutterwave, Stripe or manual bank transfer.
- Forms/CRM: Fluent Forms, Gravity Forms or WPForms.
- Email: FluentSMTP or WP Mail SMTP.
- Security: Wordfence or Solid Security.
- Performance: LiteSpeed Cache, WP Rocket or host-level caching.
- SEO: Rank Math or Yoast SEO.

## Membership Product Setup

Create a separate NGN 10,000 individual membership application/profile review product before final category approval. After review, assign the applicant to the approved membership category and payment product:

| Individual Category | Letters | Admission Fee | Annual Subscription | Life Membership |
|---|---:|---:|---:|---:|
| Student Member | SIIPM | NGN 35,000 / USD 25 | NGN 2,500 / USD 5 | N/A |
| Graduate Member | GIIPM | NGN 50,000 / USD 35 | NGN 5,000 / USD 7 | N/A |
| Associate Member | AIIPM | NGN 150,000 / USD 105 | NGN 15,000 / USD 10 | NGN 150,000 / USD 100 |
| Full Member | MIIPM | NGN 200,000 / USD 145 | NGN 25,000 / USD 15 | NGN 250,000 / USD 180 |
| Fellow Member | FIIPM | NGN 300,000 / USD 215 | NGN 30,000 / USD 20 | NGN 350,000 / USD 235 |
| Distinguished Fellow | DFIIPM | NGN 1,500,000 / USD 1,095 | N/A | N/A |

Corporate membership should be set up as three-year organization products, renewable after expiration. Corporate membership does not automatically confer individual professional membership on employees.

| Corporate Plan | Staff Size | Entry Fee | Renewal After 3 Years |
|---|---:|---:|---:|
| Elite Corporate Member | 1-50 staff | NGN 500,000 / USD 1,250 | NGN 250,000 / USD 650 |
| Gold Corporate Member | 51-100 staff | NGN 850,000 / USD 2,100 | NGN 425,000 / USD 1,050 |
| Platinum Corporate Member | Above 100 staff | NGN 1,500,000 / USD 3,750 | NGN 750,000 / USD 1,850 |

Membership payment channels to show after review/approval:

- Bank: Guaranty Trust Bank PLC.
- Account Name: Integrated Institute of Professional Management.
- Account Number: 0588546395.
- Proof of payment: finance@iipmi.org.
- Paystack NGN: https://paystack.com/pay/iipmnigeria.
- Paystack USD: https://paystack.com/pay/iipm.

## Login And Portal Access

Use one branded WordPress login page, then route users by role:

| Role | Primary Destination | Access Notes |
|---|---|---|
| Course Learner | Learner Portal | Enrolled courses, lessons, assessments, resources, certificates and progress tracking. |
| Individual Member | Membership Portal | Category, member ID, status, renewal, CPD record, documents and upgrade requests. |
| Corporate Representative | Membership Portal / Corporate Area | Organization membership status, staff training seats, advisory benefits and staff discount records. |
| Instructor / Admin | WordPress / LMS Admin | Course management, assessment review, member approval, payments and certificate issuance. |

Recommended implementation:

- WordPress login, branded front-end login page, and custom redirects by user role.
- LearnDash or Tutor LMS controls learner access to courses and certificates.
- MemberPress, Paid Memberships Pro or WooCommerce Memberships controls membership status, renewals and protected resources.
- WooCommerce plus Paystack/Flutterwave controls application fees, admissions, annual subscriptions, life membership and corporate plans.
- Verification should use private member/certificate IDs, not public payment or member-status lists.

## 2026 Executive Programmes

Shared executive pathway fee setup:

- Application fee: NGN 25,000 / USD 20.
- Members' discounted executive bundle: NGN 475,000 / USD 365.
- Non-members' discounted executive bundle: NGN 525,000 / USD 385.
- EHRM flyer standard value: members NGN 625,000 / USD 450; non-members NGN 675,000 / USD 500.

## Course Category Display

Public programme listings should lead with visible, interactive category tags for Project Management, HRM, Leadership, AI and the remaining specialist categories. Each course should appear as an image-led catalogue card with a clickable category tag, course type tag, linked title, short summary, delivery/schedule box, supporting tags and a course detail button.

| Project Management Programme | Type | Date / Delivery 1 | Date / Delivery 2 |
|---|---|---:|---:|
| Project Management Foundation Certified (PMFC) | Foundation Course | Online / Self-paced | Online / Self-paced |
| Certified Project Management Associate (CPMA) | Short Certification | May 11 - May 15 | Aug 10 - Aug 14 |
| Certified Project Management Professional (CPMP) | Short Certification | June 22 - June 26 | Sept 22 - Sept 26 |

| HRM Programme | Type | Date / Delivery 1 | Date / Delivery 2 |
|---|---|---:|---:|
| Human Resource Management Foundation Certified (HRMFC) | Foundation Course | Online / Self-paced | Online / Self-paced |
| Certified Human Resource Management Generalist (CHRMG) | Short Certification | May 25 - May 29 | Aug 24 - Aug 28 |
| Certified Human Resource Management Professional | Short Certification | July 13 - July 17 | Oct 12 - Oct 18 |

| Leadership Programme | Type | Date / Delivery 1 | Date / Delivery 2 |
|---|---|---:|---:|
| Certified Emotional Intelligence Associate | Short Certification | June 29 - July 3 | Online / Self-paced |
| Certified Emotional Intelligence Professional | Short Certification | Nov 9 - Nov 13 | Online / Self-paced |

| AI Programme | Type | Date / Delivery 1 | Date / Delivery 2 |
|---|---|---:|---:|
| Certified Generative Artificial Intelligence Course | Weekend Executive | May 8 - June 12, 2026 | Sept 4 - Oct 9, 2026 |
| Certified Professional in Cybersecurity | Weekend Executive | May 8 - June 12, 2026 | Sept 4 - Oct 9, 2026 |

| Additional Specialist Programme | Type | Date / Delivery 1 | Date / Delivery 2 |
|---|---|---:|---:|
| Certified Management Consultant | Weekend Executive | May 12 - June 4, 2026 | Sept 8 - Oct 1 |
| Certified Business Analysis Associate | Short Certification | June 8 - June 12 | Online / Self-paced |
| Certified Business Analysis Professional | Short Certification | Sept 7 - Sept 11 | Online / Self-paced |
| Certified Agile Management Associate | Short Certification | July 27 - July 31 | Online / Self-paced |
| Certified Agile Management Professional | Short Certification | Oct 26 - Oct 30 | Online / Self-paced |

Conference and membership induction sessions:

| Session | Date |
|---|---:|
| Mid Year | Aug 8 |
| End of the Year | Dec 3 |

Advisor contact to display on programme pages: 08147029035.

Each listed course should have a dedicated course detail page or LMS course record:

| Course | Prototype Page |
|---|---|
| Project Management Foundation Certified (PMFC) | course-project-management-foundation.html |
| Certified Project Management Associate (CPMA) | course-project-management-associate.html |
| Certified Project Management Professional (CPMP) | course-project-management-professional.html |
| Human Resource Management Foundation Certified (HRMFC) | course-hr-management-foundation.html |
| Certified Human Resource Management Generalist (CHRMG) | course-hr-management-generalist.html |
| Certified Human Resource Management Professional | course-hr-management-professional.html |
| Certified Emotional Intelligence Associate | course-emotional-intelligence-associate.html |
| Certified Emotional Intelligence Professional | course-emotional-intelligence-professional.html |
| Certified Generative Artificial Intelligence Course | course-generative-ai.html |
| Certified Professional in Cybersecurity | course-cybersecurity.html |
| Certified Management Consultant | course-management-consultant.html |
| Certified Business Analysis Associate | course-business-analysis-associate.html |
| Certified Business Analysis Professional | course-business-analysis-professional.html |
| Certified Agile Management Associate | course-agile-management-associate.html |
| Certified Agile Management Professional | course-agile-management-professional.html |

## Visual Direction

- Use Nigerian and African professional imagery as the default visual language.
- Mix in international professionals where pages discuss global standards, partnerships, executive development, or cross-border credibility.
- Prioritize real training rooms, boardroom discussions, online learning, corporate teams, member induction, consulting, and professional portraits.
- Avoid generic stock images that feel disconnected from Nigeria, Africa, professional development, or the workplace.
- Keep image alt text specific, for example: "African professionals in a strategy workshop" or "Nigerian professional using online learning on a laptop."

Custom prototype assets:

- assets/iipm-hero-professionals-v2.png: homepage, About, strategy and leadership positioning. Corporate boardroom scene with professionals mostly in their 30s-40s and a few early-50s senior leaders.
- assets/iipm-executive-training-v2.png: programmes, course detail and corporate training. Executive training room with mature corporate participants.
- assets/iipm-membership-networking-v2.png: membership, induction and professional community. Corporate networking scene with mid-career and senior professionals.
- assets/iipm-elearning-professional-v2.png: e-learning, contact/apply and credential verification. Mature corporate professional in an online learning setting.
- assets/iipm-project-governance.png: project management, governance, strategy and project delivery pages/cards.
- assets/iipm-hr-performance.png: HR management, administration, workforce planning and performance pages/cards.
- assets/iipm-consulting-advisory.png: consulting, advisory, business support and organizational improvement pages/cards.
- assets/iipm-corporate-training.png: corporate training, workforce development and in-company training pages/CTA bands.
- assets/iipm-credential-verification.png: certificate/member verification page.
- assets/iipm-application-consultation.png: application, contact, membership review and admissions enquiry pages.
- assets/iipm-governance-council.png: About, standards, governance, accreditation and quality assurance pages.

## Data Needed Before Publishing

- Current 2026 programme names, fees, dates, duration and delivery mode.
- Verified accreditation and partnership records, including scope and reference numbers.
- Official logo, brand colors, office address, phone, email, WhatsApp number and social media links.
- Membership eligibility rules and renewal terms.
- Certificate/member verification data model.
- Privacy policy, refund policy, terms and conditions.

## Build Order

1. Rebuild public pages and navigation.
2. Configure LMS courses, categories, lessons, quizzes and certificates.
3. Configure the branded login page and user-role redirects.
4. Configure membership levels, applications, renewals and restricted resources.
5. Connect WooCommerce products and Nigerian/international payment gateways.
6. Build private verification lookup.
7. Import existing members, learners and certificates.
8. Test checkout, login, course completion, certificate issue and verification.
9. Launch with redirects from old URLs.

