import "./dashboard.css";

export const metadata = {
  title: "Dashboard — AntoBot",
  description: "Your AntoBot license, download, and install guide.",
};

export default function DashboardPage() {
  return (
    <main className="db">
      {/* Header */}
      <header className="db__header">
        <div className="db__brand">
          <div className="db__logo" aria-hidden />
          <h2 className="db__brandName">AntoBot</h2>
        </div>

        <div className="db__actions">
          <button className="chip" aria-label="Language">
            🌐
          </button>
          <button className="chip" aria-label="Currency">
            💲
          </button>
          <div
            className="avatar"
            role="img"
            aria-label="User avatar"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuAYvUmffarYq5AeKW0rbZ1UKd_8P3JEqty2elYhC0KYXd6l-jAJetcs-Tny0Y6QajeUopWKrKAY9QXJzPvNgQ27bgo3AkJd1agvkSDjjPDA97Qtnl5ZXwVKFm3zXqv6hZlrkI1aQDcXQQu9Hc4raB1hdJ5M6Sn0gklaWSmnkmSDGI7-SLtMRB0AOGyTl7eR1wh8KAey7v6ZyNXaBQjyPEfuffucS0LrRhtCYDBSACk5r4ZpBnkKTUTDN_yDHPNH3fQoU0auHsq4u9rR)",
            }}
          />
        </div>
      </header>

      <div className="container">
        {/* Title */}
        <div className="db__titleRow">
          <h1 className="db__title">Welcome to AntoBot Pro</h1>
        </div>

        {/* Top split: product/keys (left) + hero image (right) */}
        <section className="split">
          <div className="left">
            <div className="kv">
              <p className="kv__name">AntoBot Pro</p>
              <p className="kv__key">
                License Key: <span>********************1234</span>
              </p>
            </div>
            <button className="btn btn--ghost" aria-label="Copy license">
              <span>Copy</span>
            </button>
          </div>

          <div
            className="right preview"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCGmDMtEIvX71_wRVvV-t6A1lTvT2yKOfpQDCDCHswO3wIl3rWrcA7u3MzxPwZK0xBU2fcVbN8OOiyld108z6zlFpa1TMTVgiY0K4LWoXpUAZs_cV66l_te7Vw2OHqellWq0TZaYmzJy9HGBO6g2gE_GpgFSf2bHzP6JCJrkcIOHY7C-ZIhRFay1H0SAVVK5b6LEqQ56j9HaHLIK61M5kEHeJHApDIGrD6xStk6afXk2XK_61jOvItGb38PQIDDSQ3JVIdTSBE0jNoe)",
            }}
          />
        </section>

        {/* CTA */}
        <div className="ctaRow">
          <button className="btn btn--primary">Download Bot</button>
        </div>

        {/* Install Guide */}
        <h2 className="sectionTitle">Install Guide</h2>
        <ul className="steps">
          <li className="step">
            <span className="icon">⬇️</span>
            <div className="step__text">
              <p className="step__title">Step 1: Download AntoBot Pro</p>
              <p className="step__sub">
                Download the latest version of AntoBot Pro.
              </p>
            </div>
          </li>
          <li className="step">
            <span className="icon">🗜️</span>
            <div className="step__text">
              <p className="step__title">Step 2: Unzip the File</p>
              <p className="step__sub">
                Unzip the downloaded file to your desired location.
              </p>
            </div>
          </li>
          <li className="step">
            <span className="icon">▶️</span>
            <div className="step__text">
              <p className="step__title">Step 3: Run the Executable</p>
              <p className="step__sub">Run the AntoBot Pro executable file.</p>
            </div>
          </li>
          <li className="step">
            <span className="icon">🔑</span>
            <div className="step__text">
              <p className="step__title">Step 4: Enter License Key</p>
              <p className="step__sub">Enter your license key when prompted.</p>
            </div>
          </li>
          <li className="step">
            <span className="icon">📋</span>
            <div className="step__text">
              <p className="step__title">Step 5: Follow Instructions</p>
              <p className="step__sub">
                Follow the on-screen instructions to complete the installation.
              </p>
            </div>
          </li>
        </ul>

        {/* Announcements */}
        <h2 className="sectionTitle">Announcements</h2>
        <section className="cardSplit">
          <div className="cardSplit__left">
            <div className="kv">
              <p className="kv__name">AntoBot Pro v1.2.0 Released</p>
              <p className="kv__desc">
                We're excited to announce the release of AntoBot Pro v1.2.0,
                featuring enhanced trading algorithms and improved performance.
              </p>
            </div>
            <button className="btn btn--ghost">View Release Notes</button>
          </div>
          <div
            className="cardSplit__right preview"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuA3Gdn3W0SKJvFt0nYwFHWLE81RqEOsBJE818iHYymIpEtl-0aqf8p9tqvoihajkxMKSV9lebu5VnvLSAlQqJFYEZlbDI79uXTf_m4ax47qNOn7CSgS9tEFbHfw9tin9DGmBdYDvNRmI-MjQCzbT4tVPtfv-A2WBpuB6QTFfBSiWvu6xHSKG3t0QhQZQo6Ocl7yyyeKw3GbwX_otxR3T1SwE6aql1B3k8VW6dhvoKMSHc-hOp1cEL_b5K9ZBBTM_4KkUV-szifwzBYE)",
            }}
          />
        </section>

        {/* Support */}
        <h2 className="sectionTitle">Support</h2>
        <section className="cardSplit">
          <div className="cardSplit__left">
            <div className="kv">
              <p className="kv__name">Contact Support</p>
              <p className="kv__desc">
                If you have any questions or need assistance, please don’t
                hesitate to contact our support team.
              </p>
            </div>
            <button className="btn btn--ghost">Contact Support</button>
          </div>
          <div
            className="cardSplit__right preview"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBmWYduiOQYSMIq2-8xZdJmwXfvb2bdgO4gXzsGdkfAFsobcJAYZGj4lYUIleHUA7sdBTsVSgX5jHybDrTj_brYd0tArSMFMTW94yyCGCZKY-ybOyNgKQsVK8T-OoI3enIgEOKkJ4ubzvEwOBKNEVMOx7_FQRwfjpiyXllFKjHBXT0w-hx2fShVok05sSmdbhoAhqwfWUyD5IKd0WtToC5ClQgbvu04HZKd7hrgHDm6FLK0COktfhTvRKbKgRVTlcl1OJ_7LMgio8jf)",
            }}
          />
        </section>
      </div>
    </main>
  );
}
