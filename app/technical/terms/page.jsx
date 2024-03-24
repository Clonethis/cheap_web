'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SQaZvxS5Lbw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
export default function Component() {
  const nameOfSite = "Nice";
  const urlOfSite = document.location.origin;
  console.log(urlOfSite);
  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto prose max-w-[900px] lg:prose-lg xl:prose-2xl">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl my-7">Terms of Service</h1>
          <div>
            These terms and conditions outline the rules and regulations for the use of {nameOfSite}'s Website,
            located at :
            <div className="ml-4 my-3 italic text-wrap">
            <Link href='/'>
              {urlOfSite}
            </Link>
            </div>
          </div>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use {nameOfSite}
            if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
              <h2 className="text-2xl font-bold">License</h2>
            </div>
            <p>
              Unless otherwise stated, {nameOfSite} and/or its licensors own the intellectual property rights for all
              material on {nameOfSite}. All intellectual property rights are reserved. You may access this from {nameOfSite}
              for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">You must not:</h2>
          </div>
          <ul className="list-disc ml-4">
            <li>Republish material from {nameOfSite}</li>
            <li>Sell, rent or sub-license material from {nameOfSite}</li>
            <li>Reproduce, duplicate or copy material from {nameOfSite}</li>
            <li>Redistribute content from {nameOfSite}</li>
          </ul>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">
            Parts of this website offer an opportunity for users to post and exchange opinions and information in
            certain areas of the website. {nameOfSite} does not filter, edit, publish or review Comments prior to
            their presence on the website. Comments do not reflect the views and opinions of {nameOfSite},its agents
            and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
            To the extent permitted by applicable laws, {nameOfSite} shall not be liable for the Comments or for any
            liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or
            appearance of the Comments on this website.
          </h2>
          </div>
          <p>
            {nameOfSite} reserves the right to monitor all Comments and to remove any Comments which can be
            considered inappropriate, offensive or causes breach of these Terms and Conditions.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">You warrant and represent that:</h2>
          </div>
          <ul className="list-disc ml-4">
            <li>
              You are entitled to post the Comments on our website and have all necessary licenses and consents to do
              so;
            </li>
            <li>
              The Comments do not invade any intellectual property right, including without limitation copyright, patent
              or trademark of any third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material
              which is an invasion of privacy
            </li>
            <li>
              The Comments will not be used to solicit or promote business or custom or present commercial activities or
              unlawful activity.
            </li>
          </ul>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">
            You hereby grant {nameOfSite} a non-exclusive license to use, reproduce, edit and authorize others to
            use, reproduce and edit any of your Comments in any and all forms, formats or media.
          </h2>
          </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Hyperlinking to our Content</h2>
          </div>
          <ul className="list-disc ml-4">
            <li>The following organizations may link to our Website without prior written approval:</li>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites
              of other listed businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and
              charity fundraising groups which may not hyperlink to our Web site.
            </li>
          </ul>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">
            These organizations may link to our home page, to publications or to other Website information so long as
            the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval
            of the linking party and its products and/or services; and (c) fits within the context of the linking
            party’s site.
          </h2>
          </div>
          <p>We may consider and approve other link requests from the following types of organizations:</p>
          <ul className="list-disc ml-4">
            <li>commonly-known consumer and/or business information sources;</li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p>
            We will approve link requests from these organizations if we decide that: (a) the link would not make us
            look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any
            negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence
            of {nameOfSite}; and (d) the link is in the context of general resource information.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">These organizations may link to our home page so long as the link:{"\n                  "}</h2>
          </div>
          <ul className="list-disc ml-4">
            <li>is not in any way deceptive;</li>
            <li>
              does not falsely imply sponsorship, endorsement or approval of the linking party and its products or
              services; and
            </li>
            <li>fits within the context of the linking party’s site.</li>
          </ul>
          <p>
            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our
            website, you must inform us by sending an e-mail to {nameOfSite}. Please include your name, your
            organization name, contact information as well as the URL of your site, a list of any URLs from which you
            intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3
            weeks for a response.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Approved organizations may hyperlink to our Website as follows:{"\n                  "}</h2>
          </div>
          <ul className="list-disc ml-4">
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>
              By use of any other description of our Website being linked to that makes sense within the context and
              format of content on the linking party’s site.
            </li>
          </ul>
          <p>
            No use of {nameOfSite}'s logo or other artwork will be allowed for linking absent a trademark license
            agreement.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">iFrames</h2>
          </div>
          <p>
            Without prior approval and written permission, you may not create frames around our Webpages that alter in
            any way the visual presentation or appearance of our Website.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Content Liability</h2>
          </div>
          <p>
            We shall not be hold responsible for any content that appears on your Website. You agree to protect and
            defend us against all claims that is rising on your Website. No link(s) should appear on any Website that
            may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates
            the infringement or other violation of, any third party rights.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Your Privacy</h2>
          </div>
          <div className="inline">

          <div className='after:content-[" "]'>Please read
           <Link className='ml-1' href="/technical/privacy-policy">Privacy Policy</Link>
          </div>
          </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Reservation of Rights</h2>
          </div>
          <p>
            We reserve the right to request that you remove all links or any particular link to our Website. You approve
            to immediately remove all links to our Website upon request. We also reserve the right to amen these terms
            and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be
            bound to and follow these linking terms and conditions.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Removal of links from our website</h2>
          </div>
          <p>
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us
            any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you
            directly.
          </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">
            We do not ensure that the information on this website is correct, we do not warrant its completeness or
            accuracy; nor do we promise to ensure that the website remains available or that the material on the website
            is kept up to date.
          </h2>
          </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2 mt-10">
            <h2 className="text-2xl font-bold">Disclaimer</h2>
          </div>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions
            relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc ml-4">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are
            subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including
            liabilities arising in contract, in tort and for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the website are provided free of charge, we will
            not be liable for any loss or damage of any nature.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

