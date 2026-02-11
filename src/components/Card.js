export function Card(namaBrand, jenis, transmisi, cc) {
    return `
    <div class="flex flex-col bg-white mt-8 pb-4 border border-gray-300 shadow-2xl w-64 rounded-lg overflow-hidden">
    <div class="border-b-2 border-gray-300 px-4 py-2">
    <h1 class="font-semibold">${namaBrand}</h1>
    </div>
    <div class="px-4 py-2">
    <h2 class="text-sm">${jenis}</h2>
    </div>
    <div class="px-4 py-2">
    <h2 class="text-sm">${transmisi}</h2>
    </div>
    <div class="px-4 py-2">
    <h2 class="text-sm">${cc}</h2>
    </div>
    </div>
    `
}
