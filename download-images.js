import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create directories
const assetsDir = path.join(__dirname, 'src', 'assets');
const productsDir = path.join(assetsDir, 'products');
const interiorDir = path.join(productsDir, 'interior');
const exteriorDir = path.join(productsDir, 'exterior');
const bodyDir = path.join(productsDir, 'body');

[assetsDir, productsDir, interiorDir, exteriorDir, bodyDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Image URLs to download
const imageUrls = [
  // Logo and general images
  {
    url: 'https://static.vecteezy.com/system/resources/previews/043/323/964/non_2x/car-logo-design-concept-art-design-stock-isolated-on-white-background-vector.jpg',
    filename: 'hypeauto-logo.jpg',
    category: 'general'
  },
  {
    url: 'https://www.exppresscarwash.com/assets/img/added_img/car_yellow.webp',
    filename: 'car-yellow.jpg',
    category: 'general'
  },
  
  // Interior Products
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2022/12/FD/EW/IS/3693396/premium-synthetic-leather-car-seat-cover-500x500.jpg',
    filename: 'leather-seat-cover.jpg',
    category: 'interior'
  },
  {
    url: 'https://d1428jhdevokot.cloudfront.net/production/catalog/product/cache/9/thumbnail/1200x/17f82f742ffe127f42dca9de82fb58b1/6/6/66078va030-4.jpg',
    filename: 'dashboard-trim-kit.jpg',
    category: 'interior'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXP7QS-jsN9t5DS0BNQtCOSzsucy0Ws0tekg&s',
    filename: 'steering-wheel-cover.jpg',
    category: 'interior'
  },
  {
    url: 'https://www.ford.com/performance/product/images/M-13086-F60_V1.JPG?fp_width=584&fp_height=584&imformat=chrome',
    filename: 'floor-mat-set.jpg',
    category: 'interior'
  },
  {
    url: 'https://ae01.alicdn.com/kf/Sdfa449af887e49bd94d3140b46981472e/18-22-in-1-213-64Color-Rainbow-Symphony-Car-Ambient-Lighting-Kit-RGB-LED-Strip-Light.jpg_.webp',
    filename: 'led-ambient-lighting.jpg',
    category: 'interior'
  },
  {
    url: 'https://m.media-amazon.com/images/I/61VgGjb0XrL._AC_UF350,350_QL50_.jpg',
    filename: 'seat-belt-pads.jpg',
    category: 'interior'
  },
  {
    url: 'https://m.media-amazon.com/images/I/71BJ7fQWm1L._AC_UF350,350_QL50_.jpg',
    filename: 'dashboard-cover.jpg',
    category: 'interior'
  },
  {
    url: 'https://m.media-amazon.com/images/I/61zt5LqTzlL._AC_UF350,350_QL50_.jpg',
    filename: 'armrest-cushion.jpg',
    category: 'interior'
  },
  
  // Exterior Products
  {
    url: 'https://m.media-amazon.com/images/I/612H6WfjeSL._AC_.jpg',
    filename: 'led-headlight-assembly.jpg',
    category: 'exterior'
  },
  {
    url: 'https://m.media-amazon.com/images/I/51PghKOfnxL._UF1000,1000_QL80_.jpg',
    filename: 'chrome-side-mirror.jpg',
    category: 'exterior'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVElyN8Xqp7rTyrlqEPpw8lWFbRr01NRL2g&s',
    filename: 'alloy-wheel-set.jpg',
    category: 'exterior'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8mGZDIEMvwrl6je9CDW74FsCSldrWMtU3Q&s',
    filename: 'bumper-lip-spoiler.jpg',
    category: 'exterior'
  },
  {
    url: 'https://treknride.com/wp-content/uploads/2022/02/cross-bar4.jpg',
    filename: 'roof-rails-set.jpg',
    category: 'exterior'
  },
  {
    url: 'https://m.media-amazon.com/images/I/61nX8rXKEjL._AC_UF350,350_QL50_.jpg',
    filename: 'led-fog-light-kit.jpg',
    category: 'exterior'
  },
  {
    url: 'https://www.carid.com/images/ait-racing/items/scion-tc-ait-racing-zen-style-side-skirts-2011-2013.jpg',
    filename: 'side-skirt-extensions.jpg',
    category: 'exterior'
  },
  {
    url: 'https://m.media-amazon.com/images/I/51VnGxvDfJL._AC_UF350,350_QL50_.jpg',
    filename: 'rear-spoiler-wing.jpg',
    category: 'exterior'
  },
  
  // Body Parts
  {
    url: 'https://www.breakerlink.com/blog/wp-content/uploads/2022/01/Technician-replacing-a-car-door.jpg',
    filename: 'replacement-car-door.jpg',
    category: 'body'
  },
  {
    url: 'https://boodmo.com/media/cache/catalog_part/images/parts/02be00ba9f34c295ba39528ceff98bd6.webp',
    filename: 'front-fender-panel.jpg',
    category: 'body'
  },
  {
    url: 'https://m.media-amazon.com/images/I/51vYIrWBzOL._SL1219_.jpg',
    filename: 'hood-bonnet-assembly.jpg',
    category: 'body'
  },
  {
    url: 'https://image.made-in-china.com/202f0j00MDaoGwnghbpI/Chery-Tiggo-7-Rear-Tailgate-Boot-Lid-Assy.webp',
    filename: 'tailgate-boot-lid.jpg',
    category: 'body'
  },
  {
    url: 'https://www.opgi.com/product/image/OP/156077/roof-panel-1968-72-a-body-coupe-sedan-exc-cut-supreme-monte-carlo-CH27798.jpg',
    filename: 'roof-panel-section.jpg',
    category: 'body'
  },
  {
    url: 'https://www.carid.com/images/replace/items/quarter-panel.jpg',
    filename: 'quarter-panel-left.jpg',
    category: 'body'
  },
  {
    url: 'https://m.media-amazon.com/images/I/51nM3HhTjBL._AC_UF350,350_QL50_.jpg',
    filename: 'bumper-cover-rear.jpg',
    category: 'body'
  },
  {
    url: 'https://www.carid.com/images/replace/items/trunk-floor.jpg',
    filename: 'trunk-floor-pan.jpg',
    category: 'body'
  }
];

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        return downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Remove metadata using exiftool if available, otherwise just copy
function removeMetadata(filepath) {
  try {
    // Try to use exiftool to remove metadata
    execSync(`exiftool -all= -overwrite_original "${filepath}"`, { stdio: 'ignore' });
    console.log(`Removed metadata from: ${path.basename(filepath)}`);
  } catch (error) {
    // exiftool not available, file remains as is
    console.log(`Metadata removal skipped for: ${path.basename(filepath)} (exiftool not available)`);
  }
}

// Main download process
async function downloadAllImages() {
  console.log('Starting image download process...\n');
  
  for (const item of imageUrls) {
    try {
      const targetDir = item.category === 'general' ? assetsDir : 
                       item.category === 'interior' ? interiorDir :
                       item.category === 'exterior' ? exteriorDir : bodyDir;
      
      const filepath = path.join(targetDir, item.filename);
      
      await downloadImage(item.url, filepath);
      removeMetadata(filepath);
      
    } catch (error) {
      console.error(`Failed to download ${item.filename}:`, error.message);
    }
  }
  
  console.log('\n✅ Image download process completed!');
  console.log('\n📁 Images organized in:');
  console.log('  - src/assets/ (general images)');
  console.log('  - src/assets/products/interior/');
  console.log('  - src/assets/products/exterior/');
  console.log('  - src/assets/products/body/');
}

downloadAllImages();