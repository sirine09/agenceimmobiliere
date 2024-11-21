
// 'use client'
// import { useState } from "react"
// import { Eye, EyeOff, X } from "lucide-react"  // Import X for close button
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { useRouter } from 'next/navigation';  // Import useRouter

// export default function Inscri() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword)
//   }

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }
//   const SignUpButton = () => {
//     const router = useRouter(); // Initialize the router
  
//     const handleSubmit = (e) => {
//       e.preventDefault();  // Prevent the default form submission
//       router.push('/aboutinscribed');  // Redirect to /aboutinscribed page
//     };
//   return (
//     <div>
//       {/* Login Form */}
//       <a
//   href="#"
//   onClick={toggleModal}
//   className=" text-xl text-orange-500 underline hover:text-gray-800 transition-all duration-300"
// >
//   Inscrivez-vous
// </a>
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
//             <form className="space-y-4">
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
//               <form onSubmit={handleSubmit}>
//       <Button type="submit" className="w-full">
//         S'inscrire
//       </Button>
//     </form>
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
//   )
// }
// }
'use client';
import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";  // Import X for close button
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';  // Import useRouter

export default function Inscri() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const router = useRouter(); // Initialize the router

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission
    router.push('/aboutinscribed');  // Redirect to /aboutinscribed page
  };

  return (
    <div>
      {/* Sign-up Link */}
      <a
        href="#"
        onClick={toggleModal}
        className=" text-xl text-orange-500 underline hover:text-gray-800 transition-all duration-300"
      >
        Inscrivez-vous
      </a>

      {/* Modal for Signup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[400px] relative">
            <h2 className="text-2xl font-bold mb-4">S'inscrire</h2>
            
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sign-up Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="grid gap-2">
                <Label htmlFor="name">Nom et prénom</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom complet"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="grid gap-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="exemple@domaine.com"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="grid gap-2">
                <div className="relative">
                  <Label htmlFor="signup-password">Mot de passe</Label>
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 mt-4" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 mt-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="grid gap-2">
                <div className="relative">
                  <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400 mt-4" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400 mt-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Sign Up Button */}
              <Button type="submit" className="w-full">
                S'inscrire
              </Button>

              <div className="text-sm text-gray-600 text-center">Ou inscrivez-vous en utilisant</div>

              {/* Google and Facebook Sign Up Buttons */}
              <div className="mt-4 space-y-2 flex justify-center items-center space-x-4">
                <div className="flex flex-col items-center">
                  <img
                    src="/images/autres/google.png"
                    alt="Sign up with Google"
                    className="w-12 h-12 cursor-pointer mt-1"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/images/autres/fb.png"
                    alt="Sign up with Facebook"
                    className="w-12 h-12 cursor-pointer mb-2"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
