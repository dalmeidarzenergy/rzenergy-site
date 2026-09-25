import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookieTable = ({ rows }) => (
  <div className="overflow-x-auto rounded-xl border border-[#0a2a1e]/10 my-5">
    <table className="w-full text-left text-[13.5px] md:text-[14px]">
      <thead className="bg-[#0a2a1e] text-white">
        <tr>
          <th className="px-4 py-3 font-semibold whitespace-nowrap">Cookie ID</th>
          <th className="px-4 py-3 font-semibold">Purpose</th>
          <th className="px-4 py-3 font-semibold whitespace-nowrap">Duration</th>
        </tr>
      </thead>
      <tbody className="bg-white/60">
        {rows.map((r, i) => (
          <tr key={i} className="border-t border-[#0a2a1e]/10 align-top">
            <td className="px-4 py-3 font-mono text-[#009640] font-semibold whitespace-nowrap">{r.id}</td>
            <td className="px-4 py-3 text-[#0a2a1e]/80 leading-[1.6]">{r.purpose}</td>
            <td className="px-4 py-3 text-[#0a2a1e]/80 whitespace-nowrap">{r.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Category = ({ title, description, children }) => (
  <section className="mb-8 md:mb-10">
    <h2 className="text-[#0a2a1e] font-serif text-[20px] md:text-[24px] font-bold leading-[1.3] mb-2 md:mb-3">
      {title}
    </h2>
    <p className="text-[#0a2a1e]/80 text-[14px] md:text-[15px] leading-[1.85]">{description}</p>
    {children}
  </section>
);

const essentialRows = [
  { id: 'wpconsent_preferences', purpose: "This cookie is used to store the user's cookie consent preferences.", duration: '30 days' },
];

const commentsRows = [
  { id: 'comment_author', purpose: 'Used to track the user across multiple sessions.', duration: 'Session' },
  { id: 'comment_author_email', purpose: 'Used to track the user across multiple sessions.', duration: 'Session' },
  { id: 'comment_author_url', purpose: 'Used to track the user across multiple sessions.', duration: 'Session' },
];

const gtmRows = [
  { id: 'cookiePreferences', purpose: 'Registers cookie preferences of a user', duration: '2 years' },
  { id: 'td', purpose: "Registers statistical data on users' behaviour on the website. Used for internal analytics by the website operator.", duration: 'session' },
];

const gaRows = [
  { id: '_gali', purpose: 'Used by Google Analytics to determine which links on a page are being clicked', duration: '30 seconds' },
  { id: '_ga_', purpose: 'ID used to identify users', duration: '2 years' },
  { id: '_gid', purpose: 'ID used to identify users for 24 hours after last activity', duration: '24 hours' },
  { id: '_gat', purpose: 'Used to monitor number of Google Analytics server requests when using Google Tag Manager', duration: '1 minute' },
  { id: '_gac_', purpose: 'Contains information related to marketing campaigns of the user. These are shared with Google AdWords / Google Ads when the Google Ads and Google Analytics accounts are linked together.', duration: '90 days' },
  { id: '__utma', purpose: 'ID used to identify users and sessions', duration: '2 years after last activity' },
  { id: '__utmt', purpose: 'Used to monitor number of Google Analytics server requests', duration: '10 minutes' },
  { id: '__utmb', purpose: 'Used to distinguish new sessions and visits. This cookie is set when the GA.js javascript library is loaded and there is no existing __utmb cookie. The cookie is updated every time data is sent to the Google Analytics server.', duration: '30 minutes after last activity' },
  { id: '__utmc', purpose: 'Used only with old Urchin versions of Google Analytics and not with GA.js. Was used to distinguish between new sessions and visits at the end of a session.', duration: 'End of session (browser)' },
  { id: '__utmz', purpose: 'Contains information about the traffic source or campaign that directed user to the website. The cookie is set when the GA.js javascript is loaded and updated when data is sent to the Google Analytics server', duration: '6 months after last activity' },
  { id: '__utmv', purpose: 'Contains custom information set by the web developer via the _setCustomVar method in Google Analytics. This cookie is updated every time new data is sent to the Google Analytics server.', duration: '2 years after last activity' },
  { id: '__utmx', purpose: 'Used to determine whether a user is included in an A / B or Multivariate test.', duration: '18 months' },
  { id: '_ga', purpose: 'ID used to identify users', duration: '2 years' },
];

const wooRows = [
  { id: 'sbjs_session', purpose: 'The number of page views in this session and the current page path', duration: '30 minutes' },
  { id: 'sbjs_udata', purpose: "Information about the visitor's user agent, such as IP, the browser, and the device type", duration: 'session' },
  { id: 'sbjs_first', purpose: "Traffic origin information for the visitor's first visit to your store (only applicable if the visitor returns before the session expires)", duration: 'session' },
  { id: 'sbjs_current', purpose: "Traffic origin information for the visitor's current visit to your store", duration: 'session' },
  { id: 'sbjs_first_add', purpose: "Timestamp, referring URL, and entry page for your visitor's first visit to your store (only applicable if the visitor returns before the session expires)", duration: 'session' },
  { id: 'sbjs_current_add', purpose: "Timestamp, referring URL, and entry page for your visitor's current visit to your store", duration: 'session' },
  { id: 'sbjs_migrations', purpose: 'Technical data to help with migrations between different versions of the tracking feature', duration: 'session' },
];

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App bg-[#fbf4ea] min-h-screen">
      <Header />

      <main>
        {/* Hero band */}
        <section className="bg-[#0a2a1e] pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="max-w-[900px] mx-auto px-5 md:px-6 lg:px-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#f4801f] text-[13px] md:text-[14px] font-medium mb-5 md:mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar ao início
            </Link>
            <p className="text-[#f4801f] font-medium text-[13px] md:text-[15px] mb-3">Informações legais</p>
            <h1 className="text-white font-serif text-[30px] sm:text-[38px] md:text-[46px] font-bold leading-[1.1] tracking-tight">
              Cookie Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-[#fbf4ea] py-12 md:py-20">
          <div className="max-w-[900px] mx-auto px-5 md:px-6 lg:px-10">
            <p className="text-[#0a2a1e]/80 text-[14px] md:text-[15px] leading-[1.85] mb-10 md:mb-12">
              This page provides comprehensive information about how we use cookies on our website to enhance your browsing experience, improve website performance, and deliver personalized content. Cookies are small text files that are stored on your device when you visit our site. They help us understand how visitors interact with our website, allowing us to offer a smoother and more efficient user experience. In the table below, you will find detailed information about each type of cookie we use, their purpose, and how long they remain on your device. We are committed to respecting your privacy and providing transparency about the data we collect through cookies. For more information on how we handle your personal data, please see our{' '}
              <Link to="/politica-de-privacidade" className="text-[#009640] font-semibold hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <Category
              title="Essential"
              description="Essential cookies enable basic functions and are necessary for the proper function of the website."
            >
              <CookieTable rows={essentialRows} />
            </Category>

            <Category
              title="Comments"
              description="These cookies are needed for adding comments on this website."
            >
              <CookieTable rows={commentsRows} />
            </Category>

            <Category
              title="Google Tag Manager"
              description="Google Tag Manager simplifies the management of marketing tags on your website without code changes."
            >
              <CookieTable rows={gtmRows} />
            </Category>

            <section className="mb-8 md:mb-10">
              <h2 className="text-[#0a2a1e] font-serif text-[20px] md:text-[24px] font-bold leading-[1.3] mb-2 md:mb-3">
                Statistics
              </h2>
              <p className="text-[#0a2a1e]/80 text-[14px] md:text-[15px] leading-[1.85]">
                Statistics cookies collect information anonymously. This information helps us understand how visitors use our website.
              </p>
            </section>

            <Category
              title="Google Analytics"
              description="Google Analytics is a powerful tool that tracks and analyzes website traffic for informed marketing decisions."
            >
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-[#009640] font-semibold text-[14px] md:text-[15px] hover:underline"
              >
                Learn more →
              </a>
              <CookieTable rows={gaRows} />
            </Category>

            <Category
              title="WooCommerce Sourcebuster"
              description="SourceBuster is used by WooCommerce for order attribution based on user source."
            >
              <CookieTable rows={wooRows} />
            </Category>

            <div className="mt-12 pt-6 border-t border-[#0a2a1e]/10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#009640] hover:text-[#0a2a1e] text-[14px] md:text-[15px] font-semibold transition-colors"
              >
                <ArrowLeft size={16} />
                Voltar ao início
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
