import React from "react";

function ViewBlogContent() {
  return (
    <div className="">
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white my-4"
          data-aos="fade-up"
        >
          Overview
        </h2>
        <p className="text-black dark:text-gray-400 " data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, nulla ut gravida malesuada, velit augue facilisis metus,
          et fringilla eros sapien non metus. Proin dapibus nisl nec diam
          suscipit, ac elementum odio commodo.
        </p>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white mb-4"
          data-aos="fade-up"
        >
          Key Topics Covered
        </h2>
        <ul
          data-aos="fade-up"
          className="list-disc list-inside text-black dark:text-gray-400"
        >
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            felis sed nulla interdum tempor.
          </li>
          <li>
            Quisque fermentum lorem nec ligula dignissim, non rhoncus est
            dignissim. Sed nec orci id sem fermentum dictum.
          </li>
          <li>
            Curabitur imperdiet sapien a pulvinar lobortis. Nulla facilisi.
          </li>
          <li>Donec sit amet eros ac massa convallis tincidunt a ac erat.</li>
          <li>
            Vivamus tempus, tortor in efficitur congue, lacus eros viverra
            tortor, sed porta lacus elit in mauris.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <blockquote
          data-aos="fade-up"
          className=" pl-4 italic text-black dark:text-gray-400"
        >
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tristique sem a commodo feugiat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas."
          </p>
          <cite className="mt-2 text-black dark:text-gray-400">
            - John Doe, Lorem Ipsum Expert
          </cite>
        </blockquote>
      </section>

      <section>
        <h2
          data-aos="fade-up"
          className="text-2xl font-semibold mb-4 dark: text-gray-400"
        >
          Why Read This?
        </h2>
        <p data-aos="fade-up" className="text-black dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          consectetur sapien, nec viverra est accumsan id. Nunc tincidunt, erat
          ut efficitur aliquam, metus metus vulputate ligula, a iaculis velit
          neque non sapien.
        </p>
      </section>
    </div>
  );
}

export default ViewBlogContent;
