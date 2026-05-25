import habitareLogo from '../assets/habitare-logo.png';
export function Header({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="h-full bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-600 text-emerald-900 p-6 rounded-2xl shadow-lg flex flex-col items-start justify-center text-left">
      <img
        src={habitareLogo}
        alt="Habitare"
        className="max-h-24 w-auto object-contain"
      />
      <h1 className="mt-3 text-xl md:text-2xl font-extrabold">{title}</h1>
      {subtitle ? (
        <p className="mt-2 text-base max-w-prose">{subtitle}</p>
      ) : null}
    </header>
  );
}
