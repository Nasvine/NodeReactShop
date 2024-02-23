import Layout from "../Layouts/Layout";


function ProductDetail() {
  return (
    <Layout>
      <div class=" mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="gap-16 items-center  mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-10 text-left text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">A propos de
              V-Shop</h2>
            <p class="mb-40 text-justify" >
              V-Shop vous ouvre les portes de l'excellence en matière d'achat électronique. Chez V-Shop, nous
              prônons l'harmonie parfaite entre la technologie et l'élégance, vous présentant une collection
              soigneusement sélectionnée parmi les smartphones, les iPhone, les montres intelligentes et les
              ordinateurs les plus recherchés sur le marché. Plongez dans notre univers où l'exclusivité fusionne
              avec l'innovation, et découvrez la quintessence de la technologie à chaque clic.
            </p>

          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg"
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7220fd98945942b0a2ceafa50188fc5c_9366/Favorites_Backpack_Turquoise_HY3000_01_standard.jpg"
              alt="office content 1" />
              <img class="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/23092e0453ce4f8085c2ad47018102bb_9366/Superlite_Hat_Black_EX6700_01_standard.jpg"
                alt="office content 2" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
