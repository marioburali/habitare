import habitareLogo from '../assets/habitare-logo.png'
export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="h-full bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-600 text-emerald-900 p-6 rounded-2xl shadow-lg">
      <img
        src={habitareLogo}
        alt="Habitare"
        className="h-20 w-auto"
      />
      <h1 className="mt-5 text-2xl md:text-3xl font-extrabold">{title}</h1>
      {subtitle ? <p className="mt-2 text-lg max-w-prose">{subtitle}</p> : null}
    </div>
  )
}
