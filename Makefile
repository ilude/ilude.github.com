
.PHONY: install build pages preview clean up

# Install dependencies with Bun (fast, local)
install:
	bun install

# Build for production (same as workflow) and add SPA fallback 404.html
build: install
	bun run build:prod
	-@cp -f dist/index.html dist/404.html 2>/dev/null || node -e "const fs=require('fs'); if(fs.existsSync('dist/index.html')) fs.copyFileSync('dist/index.html','dist/404.html')"

# Alias that mirrors the Pages workflow build output
pages: build

# Start local preview server (optional)
preview:
	bun run preview

# Clean build output (cross-platform best-effort)
clean:
	-@rimraf dist 2>/dev/null || powershell -NoProfile -Command "Remove-Item -Recurse -Force dist" || node -e "const fs=require('fs'); fs.rmSync('dist',{recursive:true,force:true})"

# Start dev server with live reload (Vite via Bun)
up: install
	bun run dev -- --open
