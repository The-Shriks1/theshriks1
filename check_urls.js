const urls = [
  "https://theshriks.space/robots.txt",
  "https://theshriks.space/sitemap.xml",
  "https://theshriks.space/llms.txt",
  "https://theshriks.space/brand/og-default.png",
  "https://theshriks.space/contact",
  "https://theshriks.space/facts",
  "https://theshriks.space/services",
  "https://theshriks.space/fleet/lokiai",
  "https://theshriks.space/commanders",
  "https://theshriks.space/privacy",
  "https://theshriks.space/terms"
];

async function checkUrls() {
  console.log("Running final smoke checks on live URLs...\n");
  let allGood = true;

  for (const url of urls) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (response.ok) {
        console.log(`✅ [HTTP ${response.status}] ${url}`);
      } else {
        console.log(`❌ [HTTP ${response.status}] ${url}`);
        allGood = false;
      }
    } catch (e) {
      console.log(`❌ [ERROR] ${url} - ${e.message}`);
      allGood = false;
    }
  }
  
  console.log("\nFinished testing urls.");
}

checkUrls();
