# User Signup Flow Diagram

## Signup Request Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Cognito
    participant Database
    participant Email

    User->>Frontend: Fill signup form (email, username, password)
    Frontend->>Frontend: Validate form data
    Note over Frontend: Check email format, username length, password strength
    
    Frontend->>Backend: POST /auth/signup
    Backend->>Database: Check if user exists
    
    alt User doesn't exist
        Backend->>Cognito: Sign up request
        Cognito->>Email: Send verification code
        Cognito-->>Backend: Return signup response
        Backend-->>Frontend: Return success response
        Frontend-->>User: Show confirmation message
    else User already exists
        Backend->>Cognito: Resend confirmation code
        Cognito->>Email: Send verification code
        Cognito-->>Backend: Return response
        Backend-->>Frontend: Return "User exists" message
        Frontend-->>User: Show "Check email" message
    end
    
    User->>Email: Open email
    Email->>User: View verification code
    User->>Frontend: Enter verification code
    Frontend->>Backend: POST /auth/signup_confirmation
    Backend->>Cognito: confirm_sign_up
    
    alt Verification successful
        Cognito-->>Backend: Confirmation success
        Backend->>Database: Save user
        Backend-->>Frontend: Confirmation successful
        Frontend->>Frontend: Navigate to login page
        Frontend-->>User: Show success message
    else Invalid code
        Cognito-->>Backend: Error response
        Backend-->>Frontend: Invalid code message
        Frontend-->>User: Show error message
    end
```

## Technical Details

1. **Frontend Validation**
   - Email using regex pattern `/\S+@\S+\.\S+/`
   - Username minimum length: 3 characters
   - Password requirements: 8+ characters with uppercase, lowercase, and number

2. **Backend Processing**
   - Checks both email and username for duplicates
   - Uses AWS Cognito for user authentication
   - Secret hash generation for Cognito API calls

3. **Database Integration**
   - User info stored after successful verification
   - Stores username, email for future reference
   - Does not store raw passwords (handled by Cognito)

4. **Error Handling**
   - 409: User already exists
   - 400: Invalid data provided
   - 429: Rate limiting (too many requests)

## Dependencies

- Frontend: React, axios, js-cookie
- Backend: Flask, boto3, Cognito integration
- Database: PostgreSQL (via SQLAlchemy)
- Authentication: AWS Cognito
