
// import { useState, useEffect } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [showResendButton, setShowResendButton] = useState(false);
//   const [timer, setTimer] = useState<number | null>(null); // Timer initialisé à null

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setMessage(`Un code a été envoyé à ${email}`);
//     setShowResendButton(false); // Cacher le bouton pendant le compte à rebours
//     setTimer(20); // Démarrer le minuteur
//   };

//   useEffect(() => {
//     if (timer === null) return; // Ne pas démarrer si le timer est null

//     let countdown: NodeJS.Timeout;

//     if (timer > 0) {
//       countdown = setTimeout(() => setTimer((prev) => (prev !== null ? prev - 1 : null)), 1000);
//     } else {
//       setShowResendButton(true); // Afficher le bouton après le compte à rebours
//       setTimer(null); // Stopper le minuteur
//     }

//     return () => clearTimeout(countdown); // Nettoyer le timeout
//   }, [timer]);

//   const handleResendCode = () => {
//     console.log(`Code renvoyé à ${email}`);
//     setMessage(`Un nouveau code a été envoyé à ${email}`);
//     setShowResendButton(false);
//     setTimer(20); // Redémarrer le minuteur
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

//       {/* Resend Button or Timer */}
//       {showResendButton ? (
//         <div className="mt-4 text-center">
//           <button
//             onClick={handleResendCode}
//             className="text-blue-600 hover:text-blue-800 underline font-medium"
//           >
//             Renvoyer le code
//           </button>
//         </div>
//       ) : timer !== null ? (
//         <p className="mt-4 text-sm text-gray-600 text-center">
//           Vous pourrez renvoyer un code dans {timer} seconde{timer > 1 ? "s" : ""}.
//         </p>
//       ) : null}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(""); // État pour le code de vérification
  const [message, setMessage] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false); // État pour masquer le champ email après envoi
  const [showResendButton, setShowResendButton] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Un code a été envoyé à ${email}`);
    setIsCodeSent(true); // Masquer le champ email et le bouton "Envoyer le code"
    setShowResendButton(false);
    setTimer(20); // Démarrer le minuteur
  };

  useEffect(() => {
    if (timer === null) return;

    let countdown: NodeJS.Timeout;

    if (timer > 0) {
      countdown = setTimeout(() => setTimer((prev) => (prev !== null ? prev - 1 : null)), 1000);
    } else {
      setShowResendButton(true);
      setTimer(null);
    }

    return () => clearTimeout(countdown);
  }, [timer]);

  const handleResendCode = () => {
    console.log(`Code renvoyé à ${email}`);
    setMessage(`Un nouveau code a été envoyé à ${email}`);
    setShowResendButton(false);
    setTimer(20); // Redémarrer le minuteur
  };

  const handleCodeVerification = () => {
    // Logique de vérification du code (ajouter votre logique ici)
    console.log(`Code soumis : ${code}`);
    setMessage("Code vérifié avec succès !");
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
      {!isCodeSent ? (
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
      ) : (
        <div className="mt-4 space-y-4">
          {/* Code Input */}
          <div className="grid gap-2">
            <label htmlFor="code" className="text-sm font-medium text-gray-700">
              Code de vérification
            </label>
            <Input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Entrez le code ici"
              required
            />
          </div>
          <Button onClick={handleCodeVerification} className="w-full">
            Vérifier le code
          </Button>
        </div>
      )}

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
