
// import { useState } from "react"

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Add logic for sending verification code
//     setMessage(`Un code a été envoyé à ${email}`)
//   }

//   return (
//     <div className="w-full max-w-md space-y-8">
//       <div className="text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900">Réinitialiser votre mot de passe</h2>
//         <p className="mt-2 text-sm text-gray-600">
//           Entrez votre email et nous vous enverrons un code de vérification.
//         </p>
//       </div>

//       <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//         <div className="flex flex-col space-y-2">
//           <label htmlFor="email" className="text-sm font-medium text-gray-700">
//             Adresse email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="votre-email@example.com"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Envoyer le code
//         </button>
//       </form>

//       {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
//     </div>
//   )
// }
// import { useState } from "react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("")
//   const [message, setMessage] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Ajouter la logique pour envoyer le code de vérification
//     setMessage(`Un code a été envoyé à ${email}`)
//   }

//   return (
//     <div className="w-full max-w-md space-y-8">
//       {/* Header */}
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-900">Réinitialiser votre mot de passe</h2>
//         <p className="mt-2 text-sm text-gray-600">
//           Entrez votre email et nous vous enverrons un code de vérification.
//         </p>
//       </div>

//       {/* Form */}
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* Email Input */}
//         <div className="grid gap-2">
//           <label htmlFor="email" className="text-sm font-medium text-gray-700">
//             Adresse email
//           </label>
//           <Input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="votre-email@example.com"
//           />
//         </div>

//         {/* Submit Button */}
//         <Button type="submit" className="w-full">
//           Envoyer le code
//         </Button>
//       </form>

//       {/* Success Message */}
//       {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
//     </div>
//   )
// }
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [showResendButton, setShowResendButton] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Ajouter la logique pour envoyer le code de vérification
//     setMessage(`Un code a été envoyé à ${email}`);
//     setShowResendButton(true); // Afficher le bouton sous-ligné
//   };

//   const handleResendCode = () => {
//     // Logique pour renvoyer le code
//     console.log(`Code renvoyé à ${email}`);
//   };

//   return (
//     <div className="w-full max-w-md space-y-8">
//       {/* Header */}
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-900">Réinitialiser votre mot de passe</h2>
//         <p className="mt-2 text-sm text-gray-600">
//           Entrez votre email et nous vous enverrons un code de vérification.
//         </p>
//       </div>

//       {/* Form */}
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         {/* Email Input */}
//         <div className="grid gap-2">
//           <label htmlFor="email" className="text-sm font-medium text-gray-700">
//             Adresse email
//           </label>
//           <Input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             placeholder="votre-email@example.com"
//           />
//         </div>

//         {/* Submit Button */}
//         <Button type="submit" className="w-full">
//           Envoyer le code
//         </Button>
//       </form>

//       {/* Success Message */}
//       {message && <p className="mt-4 text-sm text-green-600">{message}</p>}

//       {/* Resend Button */}
//       {showResendButton && (
//         <div className="mt-4 text-center">
//           <button
//             onClick={handleResendCode}
//             className="text-blue-600 hover:text-blue-800 underline font-medium"
//           >
//             Renvoyer le code
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showResendButton, setShowResendButton] = useState(false);
  const [timer, setTimer] = useState<number | null>(null); // Timer initialisé à null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Un code a été envoyé à ${email}`);
    setShowResendButton(false); // Cacher le bouton pendant le compte à rebours
    setTimer(20); // Démarrer le minuteur
  };

  useEffect(() => {
    if (timer === null) return; // Ne pas démarrer si le timer est null

    let countdown: NodeJS.Timeout;

    if (timer > 0) {
      countdown = setTimeout(() => setTimer((prev) => (prev !== null ? prev - 1 : null)), 1000);
    } else {
      setShowResendButton(true); // Afficher le bouton après le compte à rebours
      setTimer(null); // Stopper le minuteur
    }

    return () => clearTimeout(countdown); // Nettoyer le timeout
  }, [timer]);

  const handleResendCode = () => {
    console.log(`Code renvoyé à ${email}`);
    setMessage(`Un nouveau code a été envoyé à ${email}`);
    setShowResendButton(false);
    setTimer(20); // Redémarrer le minuteur
  };

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Réinitialiser votre mot de passe</h2>
        <p className="mt-2 text-sm text-gray-600">
          Entrez votre email et nous vous enverrons un code de vérification.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Adresse email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="votre-email@example.com"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Envoyer le code
        </Button>
      </form>

      {/* Success Message */}
      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}

      {/* Resend Button or Timer */}
      {showResendButton ? (
        <div className="mt-4 text-center">
          <button
            onClick={handleResendCode}
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Renvoyer le code
          </button>
        </div>
      ) : timer !== null ? (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Vous pourrez renvoyer un code dans {timer} seconde{timer > 1 ? "s" : ""}.
        </p>
      ) : null}
    </div>
  );
}
