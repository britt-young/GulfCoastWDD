import seo from "../../public/imgs/seo.jpg";
import SEOHeader from "../Components/SEOHeader";

const SEO = () => {
  return (
    <div>
      <SEOHeader />
      <div className="min-h-screen bg-white py-10 px-4 md:px-20">
        {/* Blog Header */}
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4">Search Engine Optimization (SEO)</h2>
          <div className="flex items-center text-gray-500 text-sm mb-6">
            <img
              src="https://i.pravatar.cc/40"
              alt="Author"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span>Britt Treece</span>
            <span className="mx-2">•</span>
            <span>October 2, 2025</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-4xl mx-auto text-alternate flex flex-col gap-y-20 ">
          <div className="my-10 ">
            <img
              src={seo}
              className="w-full h-100 object-cover border-alternate border-2 shadow-lg shadow-alternate"
              alt="SEO graphic"
            />
            <h3 className="mt-10 mb-2">What is SEO?</h3>
            <p className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              aperiam illum, quos, labore ex esse iste consequuntur ratione
              dicta voluptates assumenda adipisci enim! Molestias fuga
              accusantium temporibus inventore alias modi, enim pariatur velit
              amet animi vitae ad tenetur earum molestiae vel adipisci expedita
              voluptates illo blanditiis natus quae maxime. Rerum quam odit ex
              enim tenetur sit voluptas neque voluptatum doloremque quaerat
              consequatur sed, quod vel laboriosam adipisci eveniet eum
              consectetur. Impedit mollitia dolor nemo! Soluta obcaecati totam
              id rem? Dignissimos, temporibus quae id repellat alias laborum
              delectus mollitia maiores vel excepturi, nobis tempore quidem
              amet, placeat ducimus voluptas autem cupiditate nam unde libero
              quia ut! Distinctio sunt aspernatur vero labore! Consectetur ex
              debitis provident harum non modi aperiam ipsam quas fugit
              doloremque deleniti quis, cumque odio, voluptatem exercitationem
              autem omnis repellat iste, rerum sequi a! Nesciunt voluptates
              blanditiis nemo tempora, sunt quo consequuntur eligendi. Assumenda
              ipsa, quaerat temporibus, corrupti eius aspernatur quasi earum
              molestiae voluptas inventore consequatur! Repellat saepe eveniet
              tenetur minus optio delectus? Consequatur, nemo modi iste veniam
              aperiam, maiores distinctio porro dolor nobis quis sit possimus
              vitae earum illo commodi fugit laudantium? Sed optio maxime est
              obcaecati enim, atque tempora, dicta animi nesciunt iusto deserunt
              expedita accusamus temporibus. Repudiandae, quos tempore provident
              aliquam hic a unde placeat, quis dolorem veritatis inventore. Sint
              at totam laudantium minus ipsa obcaecati eum nihil cupiditate
              quibusdam, praesentium a nostrum fugiat dignissimos. Fugiat rerum
              atque sequi veniam aliquam tempora, maxime mollitia qui eius
              adipisci voluptates inventore ex vel modi voluptate molestiae
              voluptas, id esse. Suscipit reiciendis nulla dolore et est quis
              nemo omnis ipsum, modi recusandae quisquam optio quasi aut
              reprehenderit incidunt quas perferendis maiores? Vitae, harum!
              Minima asperiores doloribus enim eveniet ad minus quod unde
              debitis corporis accusantium vel saepe, id omnis quisquam
              veritatis illum quis placeat aperiam doloremque harum ut rerum.
            </p>
          </div>
          <div>
            <img
              src={seo}
              className="w-full h-100 object-cover border-alternate border-2 shadow-lg shadow-alternate"
              alt="SEO graphic"
            />
            <h3 className="mt-10 mb-2">On-Page SEO vs. Off-Page SEO</h3>
            <p className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus qui, nesciunt quas laudantium veritatis eaque eveniet
              tempore eum debitis nam reprehenderit, commodi voluptatem minus
              rerum? Vitae commodi ex eligendi nesciunt rerum, quisquam quaerat
              a reprehenderit deserunt pariatur assumenda fuga distinctio
              voluptate maiores aperiam consequuntur dignissimos unde repellat
              ducimus vel sapiente recusandae eius at laborum. Culpa quasi
              aspernatur odio aliquam praesentium iure porro mollitia
              temporibus, fugit non ex laboriosam perspiciatis ratione ut
              deleniti. Accusantium quae reprehenderit quam deleniti? Quisquam,
              quaerat odit. Laborum ex delectus ipsum dolorem impedit commodi
              at, voluptate tempora tempore! Atque inventore a labore, eligendi
              sunt dolore, modi possimus alias autem excepturi quas saepe ipsum
              nihil iusto, facere quam libero cumque. Aliquid illo quasi
              architecto, sint consectetur dolore aspernatur, dicta autem
              labore, exercitationem mollitia eius enim eum quidem aliquam
              sapiente eligendi ipsa odit esse? Numquam aspernatur nostrum
              voluptatum culpa facilis facere nisi molestias quas maxime,
              distinctio eius asperiores fugiat laborum similique dolore aut
              deleniti fuga odit eveniet maiores. Odit minus autem dolore
              molestias dolorem natus nihil quidem, laboriosam eum maiores
              adipisci, possimus praesentium deserunt similique facilis cum.
              Vitae tenetur at quod. A dignissimos ipsa laboriosam itaque nihil
              repellat praesentium repellendus! Et maxime voluptatem deleniti
              provident, odit vitae incidunt minus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;
