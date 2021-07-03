import React from 'react'
import { createClient } from '@supabase/supabase-js'

import { Provider } from '../src'

export const client = createClient('https://imdvvfcbtrfewysxgrnr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzNzg3MSwiZXhwIjoxOTI5OTEzODcxfQ.O7Ck0RFbXxsJ9BpxdAuey5O_MJcC_lHM06xDYKTbWxg')

export const Wrapper: React.FC<{ children: any }> = ({ children }) => (
    <Provider value={client}>{children}</Provider>
)
