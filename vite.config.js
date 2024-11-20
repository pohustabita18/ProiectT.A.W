import { defineConfig } from 'vite'
export default defineConfig({
   base: '',
   build:{
    rollupOptions: {
      input: [ "./index.html", "./aboutUs.html","./event.html","./contact.html","./shop.html","./faq.html","./cart.html","./checkout.html","./product.html","./recipe.html"]
    }
  }
})