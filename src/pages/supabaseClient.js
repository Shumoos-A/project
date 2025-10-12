import { createClient } from '@supabase/supabase-js'

// تأكد من أنك نسخت هذه من إعدادات مشروعك في Supabase
const supabaseUrl = 'https://cmhhvyhdovexqztyojcn.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtaGh2eWhkb3ZleHF6dHlvamNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxNjg0MjcsImV4cCI6MjA3NTc0NDQyN30.ZM9vGFGHP_EPoOvJhN6EPNuve-FGcaRBFh0y-jjPQNo'

export const supabase = createClient(supabaseUrl, supabaseKey)