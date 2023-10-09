// //  import {connectToDB} from @utils/database;
// import Prompt from '@models/prompt';

// export const POST = async (req, res) => {
//   const { prompt, tag } = await req.json();

//   try {
//     // await connectToDB();

//     const newPrompt = await Prompt({
//       creator: req.user._id,
//       prompt,
//       tag,
//     });

//     await newPrompt.save();

//     return new Response(JSON.stringify(newPrompt), {
//       status: 201,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify(error), {
//       status: 500,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   }
// };
