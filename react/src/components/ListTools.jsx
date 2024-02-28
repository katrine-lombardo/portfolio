import CardTool from "./CardTool";

const ListTools = () => {
  const tools = [
    {
      tool_name: "Docker",
      img: "./logos/tools_docker.png",
    },
    {
      tool_name: "Tailwind",
      img: "./logos/tools_tailwind.png",
    },
    {
      tool_name: "Bootstrap",
      img: "./logos/tools_bootstrap.png",
    },
    {
      tool_name: "Github",
      img: "./logos/tools_github.png",
    },
    {
      tool_name: "Gitlab",
      img: "./logos/tools_gitlab.png",
    },
    {
      tool_name: "RESTful API",
      img: "./logos/tools_rest-api.png",
    },
    {
      tool_name: "Cursor IDE",
      img: "./logos/tools_cursor.png",
    },
    {
      tool_name: "Google Drive",
      img: "./logos/tools_google-drive.png",
    },
    {
      tool_name: "Excel",
      img: "./logos/tools_excel.png",
    },
  ];

  return (
    <div className='flex overflow-x-auto space-x-7 md:justify-center'>
      {tools.map((tool, index) => (
        <CardTool key={index} tool={tool} />
      ))}
    </div>
  );
};
export default ListTools;
