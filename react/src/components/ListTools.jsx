import CardTool from "./CardTool";

const ListTools = () => {
  const tools = [
    {
      tool_name: "Docker",
      img: "./images/tools_docker.png",
    },
    {
      tool_name: "Tailwind",
      img: "./images/tools_tailwind.png",
    },
    {
      tool_name: "Bootstrap",
      img: "./images/tools_bootstrap.png",
    },
    {
      tool_name: "Github",
      img: "./images/tools_github.png",
    },
    {
      tool_name: "Gitlab",
      img: "./images/tools_gitlab.png",
    },
    {
      tool_name: "RESTful API",
      img: "./images/tools_rest-api.png",
    },
    {
      tool_name: "Cursor IDE",
      img: "./images/tools_cursor.png",
    },
    {
      tool_name: "Google Drive",
      img: "./images/tools_google-drive.png",
    },
    {
      tool_name: "Excel",
      img: "./images/tools_excel.png",
    },
  ];

  return (
    <div className='flex overflow-x-auto space-x-7 justify-center'>
      {tools.map((tool, index) => (
        <CardTool key={index} tool={tool} />
      ))}
    </div>
  );
};
export default ListTools;
