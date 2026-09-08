export function ReelsScreen() {
  return (
    <div className="phone-screen">
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-12 text-[10px] font-bold text-white/90">
        <span>Reels</span>
        <div className="flex gap-2 text-[8px]">
          <span>For You</span>
          <span className="rounded-full bg-white/20 px-2 py-0.5">Nearby</span>
        </div>
      </div>

      <div className="h-full w-full bg-gradient-to-br from-[#ff7a5c] via-[#e63aa6] to-[#5933c4] p-4 pt-10">
        <span className="absolute left-3 top-16 rounded bg-black/30 px-1.5 py-0.5 text-[8px] font-bold text-white">Sponsored</span>
        <div className="reel-ui">
          <div className="mt-auto pb-3 pr-2">
            <p className="font-display text-lg font-extrabold leading-tight text-white">Momos &amp; More<small className="block text-[8px] font-medium opacity-85">Sector 18 Market</small></p>
            <p className="mt-1 text-[9px] text-white/90">🔥 50% OFF first order · today only</p>
          </div>
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 text-white">
            <div className="reel-action"><span className="ic">❤️</span><span>2.4k</span></div>
            <div className="reel-action"><span className="ic">💬</span><span>180</span></div>
            <div className="reel-action"><span className="ic">↗️</span><span>Share</span></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <div className="avatar-ring"><span>@local</span></div>
        <button className="rounded-full bg-white px-2.5 py-1 text-[8px] font-extrabold text-black">Follow</button>
      </div>
      <div className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 text-[9px]">◎</div>
    </div>
  );
}

export function EventsScreen() {
  return (
    <div className="phone-screen flex flex-col bg-[#0d0a20] px-4 pt-12">
      <p className="text-[10px] text-[#8f86b8]">Good evening 👋</p>
      <h2 className="font-display text-[17px] font-extrabold text-white">What's on nearby?</h2>

      <div className="mt-3 flex items-center gap-1.5 text-[9px] font-semibold">
        <span className="rounded-full bg-gradient-to-r from-[#7c5cff] to-[#ff5c8a] px-2.5 py-1.5 text-white">Events</span>
        <span className="rounded-full bg-white/10 px-2.5 py-1.5 text-white/80">Reels</span>
        <span className="rounded-full bg-white/10 px-2.5 py-1.5 text-white/80">Offers</span>
      </div>

      <div className="mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff8a5c] via-[#f43f7f] to-[#7c3aed] p-3.5 text-white">
        <p className="text-[8px] font-bold uppercase tracking-wide opacity-85">Sat · 7:00 PM · 1.3 km</p>
        <p className="mt-6 font-display text-lg font-extrabold leading-tight">Sub Urban<br />Live!</p>
        <div className="mt-2 inline-flex rounded-full bg-white/20 px-2.5 py-1 text-[8px] font-bold">🎟️ Book tickets</div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="font-display text-[12px] font-extrabold text-white">Trending this weekend</p>
        <span className="text-[8px] font-bold text-[#b9a6ff]">See all ›</span>
      </div>

      {[['🎬', 'Comedy Night', 'Fri · 9:00 PM'], ['🏸', 'Badminton Meetup', 'Sun · 6:00 AM']].map(([e, t, d]) => (
        <div key={t} className="mt-2 flex items-center gap-2.5 rounded-2xl bg-white/5 p-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-base">{e}</div>
          <div className="flex-1">
            <p className="text-[10px] font-bold text-white">{t}</p>
            <p className="text-[8px] text-[#8f86b8]">{d}</p>
          </div>
          <div className="flex flex-col items-center rounded-lg border border-white/15 px-2 py-1 text-[8px] text-white">
            <b>₹149</b>
          </div>
        </div>
      ))}
    </div>
  );
}

export function WalletScreen() {
  return (
    <div className="phone-screen flex flex-col bg-gradient-to-b from-[#0d0a20] to-[#16102e] px-4 pt-12">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold text-white">My Wallet</p>
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/10 text-[10px] text-white">⚙️</span>
      </div>

      <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#7c5cff] to-[#ff5c8a] p-3.5 text-white">
        <p className="text-[8px] uppercase tracking-wider opacity-80">Available balance</p>
        <p className="mt-1 font-display text-2xl font-extrabold">₹1,240.00</p>
        <div className="mt-3 flex gap-1.5">
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-[8px] font-bold">+ Add money</span>
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-[8px] font-bold">Send</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2.5 rounded-2xl bg-white/5 p-2.5">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#2bd69b] to-[#7c5cff] text-sm">🔳</div>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-white">Scan &amp; Access</p>
          <p className="text-[8px] text-[#8f86b8]">Show QR to enter events & offers</p>
        </div>
      </div>

      <p className="mt-3 text-[9px] font-bold uppercase tracking-wide text-[#8f86b8]">Streak rewards</p>
      <div className="mt-2 flex items-center justify-between rounded-2xl bg-white/5 p-3">
        <div>
          <p className="text-[10px] font-bold text-white">🔥 Day 7 streak</p>
          <p className="text-[8px] text-[#8f86b8]">+₹50 earned today</p>
        </div>
        <span className="rounded-full bg-gradient-to-r from-[#ffb020] to-[#ff7a5c] px-2.5 py-1 text-[8px] font-extrabold text-black">Claim</span>
      </div>
    </div>
  );
}

export function QRScreen() {
  return (
    <div className="phone-screen flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#16102e] to-[#2a1650] px-4 pt-12">
      <p className="text-[10px] font-bold text-white">QR Access</p>
      <div className="grid h-36 w-36 place-items-center rounded-2xl bg-white p-3">
        <div className="grid h-full w-full grid-cols-7 gap-1 rounded-lg bg-white">
          {Array.from({ length: 49 }).map((_, i) => (
            <span key={i} className={i % 3 === 0 ? 'bg-black' : (i % 5 === 0 ? 'bg-black' : 'bg-white')} />
          ))}
        </div>
      </div>
      <p className="text-[9px] font-bold text-white">Event entry · Ticket #2840</p>
      <span className="rounded-full bg-gradient-to-r from-[#2bd69b] to-[#7c5cff] px-3 py-1.5 text-[8px] font-extrabold text-white">Scan to validate</span>
    </div>
  );
}
