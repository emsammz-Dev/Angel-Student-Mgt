1. framer ---> npm instal framer-motion
2. npm install tailwind-scrollbar-hide module
// tailwind.config.js
module.exports = {
theme: {
// ...
},
plugins: [
require('tailwind-scrollbar-hide')
// ...
],
};
<div class="overflow-auto scrollbar-hide">
  <!-- Your content here -->
</div>
