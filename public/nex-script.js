let currentFile = null;
let originalImageUrl = null;
let resultImageBlob = null;
let resultImageUrl = null;
let currentMode = 'original';

// DOM Elements
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const removeBtn = document.getElementById('removeBtn');
const originalTab = document.getElementById('originalTab');
const resultTab = document.getElementById('resultTab');
const downloadBtn = document.getElementById('downloadBtn');
const previewImage = document.getElementById('previewImage');
const previewPlaceholder = document.getElementById('previewPlaceholder');
const loadingOverlay = document.getElementById('loadingOverlay');
const toast = document.getElementById('toast');

// Show Toast Message
function showToast(message, isError = false) {
    toast.textContent = message;
    toast.className = 'toast show';
    if (isError) {
        toast.style.borderLeftColor = '#ef4444';
    } else {
        toast.style.borderLeftColor = '#3b82f6';
    }
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Update Preview
function updatePreview() {
    if (currentMode === 'original' && originalImageUrl) {
        previewImage.src = originalImageUrl;
        previewImage.style.display = 'block';
        previewPlaceholder.style.display = 'none';
    } else if (currentMode === 'result' && resultImageUrl) {
        previewImage.src = resultImageUrl;
        previewImage.style.display = 'block';
        previewPlaceholder.style.display = 'none';
    } else {
        previewImage.style.display = 'none';
        previewPlaceholder.style.display = 'flex';
        previewPlaceholder.style.flexDirection = 'column';
        previewPlaceholder.style.alignItems = 'center';
        previewPlaceholder.style.justifyContent = 'center';
    }
}

// Load Original Image
function loadOriginalImage(file) {
    if (!file) return false;
    
    if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file', true);
        return false;
    }
    
    if (file.size > 10 * 1024 * 1024) {
        showToast('Image size must be less than 10MB', true);
        return false;
    }
    
    // Clean up old URLs
    if (originalImageUrl) {
        URL.revokeObjectURL(originalImageUrl);
    }
    if (resultImageUrl) {
        URL.revokeObjectURL(resultImageUrl);
        resultImageBlob = null;
        resultImageUrl = null;
    }
    
    originalImageUrl = URL.createObjectURL(file);
    currentFile = file;
    currentMode = 'original';
    updatePreview();
    
    removeBtn.disabled = false;
    resultTab.disabled = true;
    downloadBtn.disabled = true;
    
    // Reset tabs
    originalTab.classList.add('active');
    resultTab.classList.remove('active');
    
    showToast(`✓ ${file.name} loaded successfully`);
    return true;
}

// Handle File Selection
function handleFileSelect(file) {
    loadOriginalImage(file);
}

// Dropzone Events
dropzone.addEventListener('click', () => {
    fileInput.click();
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = '#3b82f6';
    dropzone.style.background = 'rgba(59, 130, 246, 0.15)';
});

dropzone.addEventListener('dragleave', () => {
    dropzone.style.borderColor = 'var(--border)';
    dropzone.style.background = 'rgba(59, 130, 246, 0.05)';
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--border)';
    dropzone.style.background = 'rgba(59, 130, 246, 0.05)';
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleFileSelect(file);
    } else {
        showToast('Please drop a valid image file', true);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        handleFileSelect(e.target.files[0]);
    }
    fileInput.value = '';
});

// Remove Background
removeBtn.addEventListener('click', async () => {
    if (!currentFile) {
        showToast('Please select an image first', true);
        return;
    }
    
    loadingOverlay.style.display = 'flex';
    
    const formData = new FormData();
    formData.append('image', currentFile);
    
    try {
        const response = await fetch('/remove-bg', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to remove background');
        }
        
        const blob = await response.blob();
        
        if (resultImageUrl) {
            URL.revokeObjectURL(resultImageUrl);
        }
        
        resultImageBlob = blob;
        resultImageUrl = URL.createObjectURL(blob);
        currentMode = 'result';
        updatePreview();
        
        resultTab.disabled = false;
        downloadBtn.disabled = false;
        
        // Switch to result tab
        originalTab.classList.remove('active');
        resultTab.classList.add('active');
        
        showToast('✓ Background removed successfully!');
        
    } catch (error) {
        console.error('Error:', error);
        showToast(error.message || 'Failed to remove background. Please try again.', true);
    } finally {
        loadingOverlay.style.display = 'none';
    }
});

// Tab Switching
originalTab.addEventListener('click', () => {
    if (originalImageUrl) {
        currentMode = 'original';
        updatePreview();
        originalTab.classList.add('active');
        resultTab.classList.remove('active');
    } else {
        showToast('No original image available', true);
    }
});

resultTab.addEventListener('click', () => {
    if (resultImageUrl) {
        currentMode = 'result';
        updatePreview();
        resultTab.classList.add('active');
        originalTab.classList.remove('active');
    } else {
        showToast('No processed result available. Please remove background first.', true);
    }
});

// Download Result
downloadBtn.addEventListener('click', () => {
    if (resultImageBlob && resultImageUrl) {
        const link = document.createElement('a');
        const timestamp = Date.now();
        link.download = `nex_rbg_${timestamp}.png`;
        link.href = resultImageUrl;
        link.click();
        showToast('✓ Download started!');
    } else {
        showToast('No result available to download', true);
    }
});

// Initialize
console.log('NEX-RBG Ready');