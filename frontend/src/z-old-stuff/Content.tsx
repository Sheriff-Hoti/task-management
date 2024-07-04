// import { useState } from "react";
// import TaskContainer, { TaskContainerProps } from "./TaskContainer";

// export default function Content() {
//   const [taskC, setTaskC] = useState<TaskContainerProps[]>([
//     { name: "Backlog", id: "1" },
//     { name: "To Do", id: "2" },
//     { name: "In Progress", id: "3" },
//     { name: "Done", id: "4" },
//   ]);

//   return (
//     <section className="flex flex-wrap gap-4 p-4">
//       {taskC.map((tC) => (
//         <TaskContainer name={tC.name} id={tC.id} />
//       ))}
//     </section>
//   );
// }
