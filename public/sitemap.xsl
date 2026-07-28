<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/2019/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Habeeb Abdulsalam</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #0B1020;
            color: #F8FAFC;
            padding: 2rem;
            margin: 0;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: #111827;
            border: 1px solid #334155;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          }
          h1 {
            color: #38BDF8;
            font-size: 1.75rem;
            margin-top: 0;
            margin-bottom: 0.5rem;
          }
          p {
            color: #94A3B8;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
          }
          th {
            background-color: #1A2333;
            color: #38BDF8;
            text-align: left;
            padding: 12px;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid #334155;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid rgba(51, 65, 85, 0.5);
            font-size: 0.9rem;
            color: #E2E8F0;
          }
          tr:hover td {
            background-color: rgba(56, 189, 248, 0.05);
          }
          a {
            color: #38BDF8;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            background: rgba(56, 189, 248, 0.1);
            color: #7DD3FC;
            padding: 4px 8px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 0.8rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p>This is a dynamic XML sitemap generated for Google Search Console and web indexers.</p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge"><xsl:value-of select="sitemap:priority"/></span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
