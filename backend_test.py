#!/usr/bin/env python3
"""
Backend API Testing for Contact Form Endpoint
Tests the POST /api/contact endpoint with various scenarios
"""

import requests
import json
import io
from pathlib import Path

# Read backend URL from frontend/.env
def get_backend_url():
    env_path = Path('/app/frontend/.env')
    with open(env_path, 'r') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                return line.split('=', 1)[1].strip()
    raise ValueError("REACT_APP_BACKEND_URL not found in /app/frontend/.env")

BACKEND_URL = get_backend_url()
CONTACT_ENDPOINT = f"{BACKEND_URL}/api/contact"

print(f"Testing Contact Form Endpoint: {CONTACT_ENDPOINT}")
print("=" * 80)

# Test 1: Valid submission without attachments
print("\n[TEST 1] Valid submission without attachments")
print("-" * 80)
try:
    data = {
        'name': 'Test User',
        'email': 'test@example.com',
        'phone': '+351912345678',
        'message': 'Este é um teste do formulário de contacto.'
    }
    
    response = requests.post(CONTACT_ENDPOINT, data=data)
    print(f"Status Code: {response.status_code}")
    print(f"Response Headers: {dict(response.headers)}")
    print(f"Response Body: {response.text}")
    
    if response.status_code == 200:
        json_response = response.json()
        print(f"\n✅ TEST 1 PASSED")
        print(f"   - Success: {json_response.get('success')}")
        print(f"   - Email ID: {json_response.get('id')}")
        print(f"   - Attachments: {json_response.get('attachments')}")
        
        if json_response.get('success') and json_response.get('attachments') == 0:
            print("   - Email sent successfully via Resend!")
        else:
            print("   - ⚠️ Unexpected response structure")
    else:
        print(f"❌ TEST 1 FAILED - Expected 200, got {response.status_code}")
        print(f"   Error detail: {response.text}")
        
except Exception as e:
    print(f"❌ TEST 1 FAILED with exception: {str(e)}")

# Test 2: Valid submission with 2 small attachments
print("\n\n[TEST 2] Valid submission with 2 small attachments")
print("-" * 80)
try:
    # Create 2 small dummy files
    file1_content = b"This is a test PDF file content for testing purposes."
    file2_content = b"This is another test text file for attachment testing."
    
    # For multipart/form-data with multiple files, we need to send them separately
    files = {
        'name': (None, 'Test User with Files'),
        'email': (None, 'testfiles@example.com'),
        'phone': (None, '+351912345679'),
        'message': (None, 'Este é um teste com anexos.'),
    }
    
    # Add files with the same field name
    files_list = [
        ('files', ('test_document.pdf', io.BytesIO(file1_content), 'application/pdf')),
        ('files', ('test_notes.txt', io.BytesIO(file2_content), 'text/plain'))
    ]
    
    # Combine form data and files
    multipart_data = list(files.items()) + files_list
    
    response = requests.post(CONTACT_ENDPOINT, files=multipart_data)
    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")
    
    if response.status_code == 200:
        json_response = response.json()
        print(f"\n✅ TEST 2 PASSED")
        print(f"   - Success: {json_response.get('success')}")
        print(f"   - Email ID: {json_response.get('id')}")
        print(f"   - Attachments: {json_response.get('attachments')}")
        
        if json_response.get('attachments') == 2:
            print("   - Email sent successfully with 2 attachments via Resend!")
        else:
            print(f"   - ⚠️ Expected 2 attachments, got {json_response.get('attachments')}")
    else:
        print(f"❌ TEST 2 FAILED - Expected 200, got {response.status_code}")
        print(f"   Error detail: {response.text}")
        
except Exception as e:
    print(f"❌ TEST 2 FAILED with exception: {str(e)}")

# Test 3: Missing required fields (empty name)
print("\n\n[TEST 3] Missing required fields (empty name)")
print("-" * 80)
try:
    data = {
        'name': '',  # Empty name
        'email': 'test@example.com',
        'phone': '+351912345678',
        'message': 'Test message'
    }
    
    response = requests.post(CONTACT_ENDPOINT, data=data)
    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")
    
    if response.status_code in [400, 422]:
        print(f"\n✅ TEST 3 PASSED")
        print(f"   - Correctly rejected with status {response.status_code}")
        try:
            error_detail = response.json()
            print(f"   - Error detail: {error_detail}")
        except Exception:
            print(f"   - Error text: {response.text}")
    else:
        print(f"❌ TEST 3 FAILED - Expected 400 or 422, got {response.status_code}")
        
except Exception as e:
    print(f"❌ TEST 3 FAILED with exception: {str(e)}")

# Test 4: Too many files (>10)
print("\n\n[TEST 4] Too many files (>10)")
print("-" * 80)
try:
    # Create 11 small dummy files
    files_list = [
        ('name', (None, 'Test User Many Files')),
        ('email', (None, 'testmany@example.com')),
        ('phone', (None, '+351912345680')),
        ('message', (None, 'Testing with too many files.')),
    ]
    
    for i in range(11):
        file_content = f"Test file {i+1} content".encode('utf-8')
        files_list.append(('files', (f'test_file_{i+1}.txt', io.BytesIO(file_content), 'text/plain')))
    
    response = requests.post(CONTACT_ENDPOINT, files=files_list)
    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")
    
    if response.status_code == 400:
        json_response = response.json()
        detail = json_response.get('detail', '')
        print(f"\n✅ TEST 4 PASSED")
        print(f"   - Correctly rejected with status 400")
        print(f"   - Error detail: {detail}")
        
        if "Máximo 10 ficheiros permitidos" in detail or "Máximo" in detail:
            print("   - Correct error message returned!")
        else:
            print(f"   - ⚠️ Expected 'Máximo 10 ficheiros permitidos', got: {detail}")
    else:
        print(f"❌ TEST 4 FAILED - Expected 400, got {response.status_code}")
        print(f"   Response: {response.text}")
        
except Exception as e:
    print(f"❌ TEST 4 FAILED with exception: {str(e)}")

print("\n" + "=" * 80)
print("TESTING COMPLETE")
print("=" * 80)
