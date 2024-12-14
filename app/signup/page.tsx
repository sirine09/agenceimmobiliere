
// 'use client';
// import { useState } from "react";
// import { Eye, EyeOff, X } from "lucide-react";  // Import X for close button
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRouter } from 'next/navigation';  // Import useRouter

// export default function Inscri() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const router = useRouter(); // Initialize the router

//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevent the default form submission
//     router.push('/aboutinscribed');  // Redirect to /aboutinscribed page
//   };

//   return (
//     <div>
//       {/* Sign-up Link */}
//       <a
//         href="#"
//         onClick={toggleModal}
//         className=" text-xl text-orange-500 underline hover:text-gray-800 transition-all duration-300"
//       >
//         Inscrivez-vous
//       </a>

//       {/* Modal for Signup */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
//             <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
            
//             {/* Close Button */}
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* Sign-up Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Name Field */}
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Nom et prénom</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Votre nom complet"
//                   required
//                 />
//               </div>

//               {/* Email Field */}
//               <div className="grid gap-2">
//                 <Label htmlFor="signup-email">Email</Label>
//                 <Input
//                   id="signup-email"
//                   type="email"
//                   placeholder="exemple@domaine.com"
//                   required
//                 />
//               </div>

//               {/* Phone Number Field */}
//               <div className="grid gap-2">
//                 <Label htmlFor="phone">Téléphone</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Votre numéro de téléphone"
//                   required
//                 />
//               </div>

//               {/* Password Field */}
//               <div className="grid gap-2">
//                 <div className="relative">
//                   <Label htmlFor="signup-password">Mot de passe</Label>
//                   <Input
//                     id="signup-password"
//                     type={showPassword ? "text" : "password"}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-5 h-5 text-gray-400 mt-4" />
//                     ) : (
//                       <Eye className="w-5 h-5 text-gray-400 mt-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Confirm Password Field */}
//               <div className="grid gap-2">
//                 <div className="relative">
//                   <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
//                   <Input
//                     id="confirm-password"
//                     type={showConfirmPassword ? "text" : "password"}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={toggleConfirmPasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showConfirmPassword ? (
//                       <EyeOff className="w-5 h-5 text-gray-400 mt-4" />
//                     ) : (
//                       <Eye className="w-5 h-5 text-gray-400 mt-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Sign Up Button */}
//               <Button type="submit" className="w-full">
//                 S'inscrire
//               </Button>

//               <div className="text-sm text-gray-600 text-center">Ou inscrivez-vous en utilisant</div>

//               {/* Google and Facebook Sign Up Buttons */}
//               <div className="mt-4 space-y-2 flex justify-center items-center space-x-4">
//                 <div className="flex flex-col items-center">
//                   <img
//                     src="/images/autres/google.png"
//                     alt="Sign up with Google"
//                     className="w-12 h-12 cursor-pointer mt-1"
//                   />
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <img
//                     src="/images/autres/fb.png"
//                     alt="Sign up with Facebook"
//                     className="w-12 h-12 cursor-pointer mb-2"
//                   />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useState } from "react";
// import signupSchema from "../schemas/signupschema"; // Ensure the schema is correctly exported from the file
// import { Eye, EyeOff, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { AxiosError } from "axios";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirmPassword: string;
// }

// interface Errors {
//   [key: string]: string;
// }

// export default function Inscri() {
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [errors, setErrors] = useState<Errors>({});
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Validate data with Zod schema
//       signupSchema.parse(formData);

//       // Send data to the API with Axios
//       const response = await axios.post("http://localhost:8000/utilisateur/api/client/", {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         password: formData.password,
//       });

//       // Redirect if successful
//       console.log("Success:", response.data);
//       router.push("/aboutinscribed");
//     } catch (err: any) {
//       if (err.errors) {
//         // Handle Zod validation errors
//         const zodErrors: Errors = {};
//         err.errors.forEach((error: any) => {
//           zodErrors[error.path[0]] = error.message;
//         });
//         setErrors(zodErrors);
//       } else if (axios.isAxiosError(err) && err.response?.data) {
//         // Handle server errors
//         const serverErrors = err.response.data.errors || {};
//         setErrors(serverErrors);
//       } else {
//         console.error("Unknown error:", err);
//       }
//     }
//   };

//   return (
//     <div>
//       <a
//         href="#"
//         onClick={toggleModal}
//         className="text-xl text-orange-500 underline hover:text-gray-800 transition-all duration-300"
//       >
//         Inscrivez-vous
//       </a>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
//             <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Nom et prénom</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Votre nom complet"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="exemple@domaine.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="phone">Téléphone</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Votre numéro de téléphone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="password">Mot de passe</Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
//                 <div className="relative">
//                   <Input
//                     id="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={toggleConfirmPasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//                 )}
//               </div>
//               <Button type="submit" className="w-full">
//                 S'inscrire
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useState } from "react";
// import signupSchema from "../schemas/signupschema"; // Ensure the schema is correctly exported from the file
// import { Eye, EyeOff, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { AxiosError } from "axios";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirmPassword: string;
// }

// interface Errors {
//   [key: string]: string;
// }

// export default function Inscri() {
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [errors, setErrors] = useState<Errors>({});
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     try {
//       // Validate data using Zod
//       signupSchema.parse({
//         nom: formData.name,
//         email: formData.email,
//         téléphone: formData.phone,
//         password: formData.password,
//         confirmPassword: formData.confirmPassword
//       });
  
//       // Send data to API
//       const response = await axios.post("http://localhost:8000/utilisateur/api/client/", {
//         nom: formData.name,
//         email: formData.email,
//         téléphone: formData.phone,
//         password: formData.password,
//       });
  
      

//       // If successful, redirect to the desired page
//       console.log("Success:", response.data);
//       router.push("/aboutinscribed");
//     } catch (err: any) {
//       if (err instanceof AxiosError && err.response?.data) {
//         // Handle server-side validation errors (from API)
//         const serverErrors = err.response.data.errors || {};
//         setErrors(serverErrors);
//       } else if (err instanceof Error && err.message) {
//         // Handle Zod validation errors
//         setErrors({
//           confirmPassword: err.message, // For the password match error
//         });
//       } else {
//         console.error("Unknown error:", err);
//       }
//     }
//   };

//   return (
//     <div>
//       <a
//         href="#"
//         onClick={toggleModal}
//         className="text-xl text-orange-500 underline hover:text-gray-800 transition-all duration-300"
//       >
//         Inscrivez-vous
//       </a>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
//             <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Nom et prénom</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Votre nom complet"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="exemple@domaine.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="phone">Téléphone</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Votre numéro de téléphone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="password">Mot de passe</Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
//                 <div className="relative">
//                   <Input
//                     id="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={toggleConfirmPasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//                 )}
//               </div>
//               <Button type="submit" className="w-full">
//                 S'inscrire
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useState } from "react";
// import { Eye, EyeOff, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { AxiosError } from "axios";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   password: string;
//   confirmPassword: string;
// }

// interface Errors {
//   [key: string]: string;
// }

// export default function Inscri() {
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [errors, setErrors] = useState<Errors>({});
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     // Basic client-side validation
//     const newErrors: Errors = {};
    
//     if (!formData.name.trim()) newErrors.name = "Le nom est requis";
//     if (!formData.email.trim()) newErrors.email = "L'email est requis";
//     if (!formData.phone.trim()) newErrors.phone = "Le numéro de téléphone est requis";
//     if (!formData.password.trim()) newErrors.password = "Le mot de passe est requis";
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
//     }
  
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
  
//     try {
//       const payload = {
//         nom: formData.name,
//         email: formData.email,
//         téléphone: formData.phone,
//         password: formData.password,
//       };
  
//       console.log('Payload:', payload);
  
//       const response = await axios.post(
//         "http://localhost:8000/utilisateur/api/client/", 
//         payload,
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );
  
//       console.log("Success:", response.data);
//       router.push("/aboutinscribed");
//     } catch (err: any) {
//       if (axios.isAxiosError(err)) {
//         console.error('Axios Error:', {
//           status: err.response?.status,
//           data: err.response?.data,
//           headers: err.response?.headers
//         });
  
//         // Map server errors to form errors
//         const serverErrors: Errors = {};
//         if (err.response?.data) {
//           Object.keys(err.response.data).forEach(key => {
//             serverErrors[key] = err.response?.data[key];
//           });
//         }
  
//         setErrors(serverErrors);
//       } else {
//         console.error("Unknown error:", err);
//       }
//     }
//   };

//   return (
//     <div>
//       <a
//         href="#"
//         onClick={toggleModal}
//         className="text-xl text-orange-500 underline hover:text-gray-800 transition-all duration-300"
//       >
//         Inscrivez-vous
//       </a>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
//             <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Nom et prénom</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Votre nom complet"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="exemple@domaine.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="phone">Téléphone</Label>
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="Votre numéro de téléphone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//                 {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="password">Mot de passe</Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
//                 <div className="relative">
//                   <Input
//                     id="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={toggleConfirmPasswordVisibility}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
//                 )}
//               </div>
//               <Button type="submit" className="w-full">
//                 S'inscrire
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  [key: string]: string;
}

export default function Inscri() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle functions
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Client-side validation
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    if (!formData.phone.trim()) newErrors.phone = "Le numéro de téléphone est requis";
    if (!formData.password.trim()) newErrors.password = "Le mot de passe est requis";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare payload
    const payload = {
      nom: formData.name,
      email: formData.email,
      téléphone: formData.phone,
      password: formData.password,
    };
    
    // Create FormData object
    const formDataObj = new FormData();
    formDataObj.append("nom", payload.nom);
    formDataObj.append("email", payload.email);
    formDataObj.append("téléphone", payload.téléphone);
    formDataObj.append("password", payload.password);
    
    // Add image if available
    // if (formData.image) {
    //   formDataObj.append("image", formData.image);
    // }
    
    // Send the request
    const response = await fetch("http://localhost:8000/utilisateur/api/client/", {
      method: "POST",
      body: formDataObj, // Use FormData for multipart/form-data
    });
    
    if (!response.ok) {
      const data = await response.json();
      console.error("Fetch Error:", data);
      setErrors({ global: "Une erreur est survenue avec le serveur." });
    } else {
      const data = await response.json();
      console.log("Client créé avec succès:", data);
      // Store the client's name in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('clientName', formData.name);
       
      }
      toggleModal();
      router.push("/aboutinscribed");
    }
  }
  return (
    <div>
      <a
        href="#"
        onClick={toggleModal}
        className="text-xl text-orange-500 underline hover:text-gray-800 transition-all duration-300"
        role="button"
      >
        Inscrivez-vous
      </a>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
            <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="grid gap-2">
                <Label htmlFor="name">Nom et prénom</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@domaine.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Phone Field */}
              <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Password Field */}
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Votre mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              {/* Confirm Password Field */}
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmez votre mot de passe"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center"
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                S'inscrire
              </Button>
              {errors.global && <p className="text-red-500 text-sm mt-2">{errors.global}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
