// 'use client'
// import { useState } from "react"
// import { Eye, EyeOff, X } from "lucide-react" // Import the X icon
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Link from "next/link"
// import Inscri from "../signup/page";
// import ForgotPasswordPage from "../forget_password/page";
// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <div>
//       {/* Button to open the modal for sign up */}
//       <button
//         onClick={toggleModal}
//         className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
//       >
//         Se connecter
//       </button>

//       {/* Modal for Sign-Up */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
//             {/* Close Icon */}
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <X size={24} /> {/* Close icon */}
//             </button>

//             <h2 className="text-2xl font-bold mb-4">Se connecter</h2>

//             {/* Sign-up Form */}
//             <form className="space-y-4">
//               {/* Email or Phone Field */}
//               <div className="grid gap-2">
//                 <Label htmlFor="signup-email-or-phone">Email ou téléphone</Label>
//                 <Input
//                   id="signup-email-or-phone"
//                   type="text"
//                   placeholder="exemple@domaine.com ou 0123456789"
//                   required
//                 />
//               </div>

//               {/* Password Field */}
//               <div className="grid gap-2">
//                 <div className="flex items-center">
//                   <Label htmlFor="password">Mot de passe</Label>
//                 </div>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="********"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                   >
//                     {showPassword ? <EyeOff className=" mb-6" /> : <Eye className=" mb-6" />}
//                   </button>
                  
//                   <ForgotPasswordPage/>
//                 </div>
//               </div>
//             </form>

//             {/* Submit Button */}
//             <Button type="submit" className="w-full mt-2">
//               Se connecter
//             </Button>

//             <span className="text-sm text-gray-600 text-center block mt-4">
//               Ou connectez-vous en utilisant
//             </span>

//             {/* Google and Facebook Sign-Up Buttons */}
//             <div className="mt-4 flex justify-center items-center space-x-4">
//               {/* Google Sign Up */}
//               <div className="flex flex-col items-center">
//                 <img
//                   src="/images/autres/google.png"  // Replace with the actual path to the Google logo
//                   alt="Sign up with Google"
//                   className="w-12 h-12 cursor-pointer"
//                 />
//               </div>

//               {/* Facebook Sign Up */}
//               <div className="flex flex-col items-center ">
//                 <img
//                   src="/images/autres/fb.png"  // Replace with the actual path to the Facebook logo
//                   alt="Sign up with Facebook"
//                   className="w-12 h-12 cursor-pointer"
//                 />
//               </div>
//                </div>
//               <div>
//               <div className="text-sm text-gray-600 text-center mt-4">Vous n'avez pas de compte ?</div>
//               <div className="flex justify-center items-center">
//                 <Inscri/>
//             </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
// 'use client'
// import { useState } from "react"
// import { Eye, EyeOff, X } from "lucide-react" // Import the X icon
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Inscri from "../signup/page"
// import ForgotPasswordPage from "../forget_password/page"

// export default function SignUp() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [isForgotPassword, setIsForgotPassword] = useState(false)  // State for toggling forgot password view

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//     setIsForgotPassword(false)  // Close the Forgot Password view when modal is closed
//   }

//   const toggleForgotPassword = () => {
//     setIsForgotPassword(true)  // Show Forgot Password Page
//   }

//   return (
//     <div>
//       {/* Button to open the modal for sign up */}
//       <button
//         onClick={toggleModal}
//         className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
//       >
//         Se connecter
//       </button>

//       {/* Modal for Sign-Up */}
//       {isModalOpen && !isForgotPassword && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
//             {/* Close Icon */}
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               <X size={24} /> {/* Close icon */}
//             </button>

//             <h2 className="text-2xl font-bold mb-4">Se connecter</h2>

//             {/* Sign-up Form */}
//             <form className="space-y-4">
//               {/* Email or Phone Field */}
//               <div className="grid gap-2">
//                 <Label htmlFor="signup-email-or-phone">Email ou téléphone</Label>
//                 <Input
//                   id="signup-email-or-phone"
//                   type="text"
//                   placeholder="exemple@domaine.com ou 0123456789"
//                   required
//                 />
//               </div>

//               {/* Password Field */}
//               <div className="grid gap-2">
//                 <div className="flex items-center">
//                   <Label htmlFor="password">Mot de passe</Label>
//                 </div>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="********"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                   >
//                     {showPassword ? <EyeOff className=" mb-6" /> : <Eye className=" mb-6" />}
//                   </button>
//                 </div>
//               </div>
//             </form>

//             {/* Submit Button */}
//             <Button type="submit" className="w-full mt-2">
//               Se connecter
//             </Button>

//             <span className="text-sm text-gray-600 text-center block mt-4">
//               Ou connectez-vous en utilisant
//             </span>

//             {/* Google and Facebook Sign-Up Buttons */}
//             <div className="mt-4 flex justify-center items-center space-x-4">
//               {/* Google Sign Up */}
//               <div className="flex flex-col items-center">
//                 <img
//                   src="/images/autres/google.png"  // Replace with the actual path to the Google logo
//                   alt="Sign up with Google"
//                   className="w-12 h-12 cursor-pointer"
//                 />
//               </div>

//               {/* Facebook Sign Up */}
//               <div className="flex flex-col items-center ">
//                 <img
//                   src="/images/autres/fb.png"  // Replace with the actual path to the Facebook logo
//                   alt="Sign up with Facebook"
//                   className="w-12 h-12 cursor-pointer"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="text-sm text-gray-600 text-center mt-4">Vous n'avez pas de compte ?</div>
//               <div className="flex justify-center items-center">
//                 <Inscri />
//               </div>
//               <div className="text-sm text-gray-600 text-center mt-4 cursor-pointer" onClick={toggleForgotPassword}>
//                 Mot de passe oublié ?
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Forgot Password Component */}
//       {isModalOpen && isForgotPassword && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          

//             <ForgotPasswordPage />  {/* Only display Forgot Password component */}
          
//         </div>
//       )}
//     </div>
//   )
// }
'use client'
import { useState } from "react"
import { Eye, EyeOff, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Inscri from "../signup/page"
import ForgotPasswordPage from "../forget_password/page"


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isForgotPassword, setIsForgotPassword] = useState(false)

  
  const handleClick = () => {
    console.log("Redirecting to /aboutinscribed");
    window.location.href = '/aboutinscribed';  // Simple redirection
    // setIsModalOpen(false);  // Close the modal after navigating
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    setIsForgotPassword(false)
  }

  const toggleForgotPassword = () => {
    setIsForgotPassword(true)
  }

  return (
    <div>
      <button
        onClick={toggleModal}
        className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      >
        Se connecter
      </button>

      {/* Modal for Sign-Up */}
      {isModalOpen && !isForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Se connecter</h2>

            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="signup-email-or-phone">Email ou téléphone</Label>
                <Input
                  id="signup-email-or-phone"
                  type="text"
                  placeholder="exemple@domaine.com ou 0123456789"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 mb-4"
                  >
                    {showPassword ? <EyeOff className="mt-1" /> : <Eye className="mt-1" />}
                  </button>
                  <div
              className="text-sm text-gray-600 underline   cursor-pointer"
              onClick={toggleForgotPassword}
            >
              Mot de passe oublié ?
            </div>
                </div>
              </div>
            </form>
            <Button onClick={handleClick} className="w-full mt-2">
              Se connecter
            </Button>


            <span className="text-sm text-gray-600 text-center block mt-4">
              Ou connectez-vous en utilisant
            </span>
            <div className="mt-4 flex justify-center items-center space-x-4">
              <img src="/images/autres/google.png" alt="Google" className="w-12 h-12 cursor-pointer" />
              <img src="/images/autres/fb.png" alt="Facebook" className="w-12 h-12 cursor-pointer" />
            </div>

            <div className="text-sm text-gray-600 text-center mt-4">Vous n'avez pas de compte ?</div>
            <div className="flex justify-center items-center">
              <Inscri />
            </div>
            
          </div>
        </div>
      )}

      {/* Forgot Password Component */}
      {isModalOpen && isForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <ForgotPasswordPage />
          </div>
        </div>
      )}
    </div>
  )
}
