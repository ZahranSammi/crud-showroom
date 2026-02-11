export function Navbar() {
    return `
 <nav class="flex items-center justify-between h-16 px-8 bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
    <div class="flex items-center gap-3">
        <div class="w-9 h-9 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-200 flex items-center justify-center text-white font-black italic">
            E
        </div>
        <h1 class="text-slate-900 font-extrabold text-xl tracking-tight">
            Showroom <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Epstein</span>
        </h1>
    </div>

</nav>
    `
}
