// import Task from "./Task";

// export type TaskContainerProps = {
//   id: string;
//   name: string;
// };

// export default function TaskContainer({ name, id }: TaskContainerProps) {
//   return (
//     <div
//       id={`task-container-${id}`}
//       className="flex flex-col min-w-60 bg-slate-300 w-full max-w-xs rounded-lg p-4 pt-2 transition ease-in-out hover:scale-105 hover:bg-slate-400 gap-4"
//       draggable
//       // onDrag={(e) => console.log("on drag:", e)}
//       // onDragCapture={(e) => console.log("on drag capture:", e)}
//       // onDragStart={(e) => console.log("on drag start:", e)}
//       // onDragStartCapture={(e) => console.log("on drag start capture:", e)}
//       // onDragEnd={(e) => console.log("on drag end:", e)}
//       // onDragEndCapture={(e) => console.log("on drag end capture:", e)}
//       onDragEnter={(e) => console.log("on drag enter:", e)}
//       onDragEnterCapture={(e) => console.log("on drag enter capture:", e)}
//     >
//       <div
//         id="title"
//         className="flex justify-center text-xl font-semibold"
//         draggable={false}
//       >
//         {name}
//       </div>
//       <div className="flex flex-col gap-2">
//         <Task />
//         <Task />
//         <Task />
//         <Task />
//       </div>
//     </div>
//   );
// }
