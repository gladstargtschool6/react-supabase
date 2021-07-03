
import { createClient } from '@supabase/supabase-js' import { Provider } from 'react-supabase' const client = createClient('https://imdvvfcbtrfewysxgrnr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzNzg3MSwiZXhwIjoxOTI5OTEzODcxfQ.O7Ck0RFbXxsJ9BpxdAuey5O_MJcC_lHM06xDYKTbWxg') const App = () => ( <Provider value={client}> <YourRoutes /> </Provider> )
