// Apne Supabase project ka URL aur anon public key yahan likhein
// (Dashboard -> Project Settings -> API)
const PROJECTURL = `https://fnmbzlzoqqmanvqbblag.supabase.co`;
const ANON_PUBLIC_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubWJ6bHpvcXFtYW52cWJibGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5MDMwNzEsImV4cCI6MjEwNzQ3OTA3MX0.vvXBUNR2FmfaiyBmvawC9p08SmFSDjOCuIsqOayUWUs`;

const supabase = window.supabase.createClient(PROJECTURL, ANON_PUBLIC_KEY);
export default supabase;
