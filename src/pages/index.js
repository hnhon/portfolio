import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import "../styles/global.css";

const IndexPage = ({ data }) => {
  const arr = data.allDataJson.edges;
  return (
    <div>
      <div className="flex flex-col items-center mb-20">
        <div className="font-bold text-4xl mb-20 mt-5">Projects</div>
        <div className="space-y-10">
          {arr.map((o) => {
            let obj = o.node;
            let title = obj.title;
            let description = obj.description;
            let id = obj.id;
            let img = getImage(obj.imgUrl);
            let url = obj.url;
            let githubLink = obj.githubLink;
            return (
              <div className="card relative" key={id}>
                <GatsbyImage className="mb-10" image={img} alt="image" />
                <div className="font-bold text-2xl text-center mb-10">
                  {title}
                </div>
                <div className="mb-10 text-xl text-center mx-5">
                  {description}
                </div>
                <div className="flex justify-center items-center space-x-4 absolute bottom-[10px] left-[50%] translate-x-[-50%]">
                  <a href={`${url}`} target="_blank">
                    <svg
                      className="hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </a>
                  <a href={`${githubLink}`} target="_blank">
                    <svg
                      className="hover:cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="bg-black text-white text-center sticky bottom-0">
        Created with &#10084; by Hon. Code on{" "}
        <span className="underline"><a href="https://github.com/hnhon" target="_blank">Github</a> </span>
      </footer>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          imgUrl {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          description
          id
          url
          githubLink
        }
      }
    }
  }
`;

export default IndexPage;
