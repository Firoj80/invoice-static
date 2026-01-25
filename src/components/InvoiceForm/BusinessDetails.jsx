import { useRef } from 'react';
import { Upload, X } from 'lucide-react';

const BusinessDetails = ({ data, updateField }) => {
    const fileInputRef = useRef(null);

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateField('businessLogo', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeLogo = () => {
        updateField('businessLogo', null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="business-details">
            <div className="logo-upload">
                <div
                    className="logo-preview"
                    onClick={() => fileInputRef.current?.click()}
                >
                    {data.businessLogo ? (
                        <img src={data.businessLogo} alt="Business logo" />
                    ) : (
                        <div className="placeholder">
                            <Upload size={24} />
                            <span>Upload Logo</span>
                        </div>
                    )}
                </div>
                {data.businessLogo && (
                    <button
                        type="button"
                        className="btn-ghost btn-sm"
                        onClick={removeLogo}
                    >
                        <X size={16} />
                        Remove
                    </button>
                )}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                />
            </div>

            <div className="form-group">
                <label htmlFor="businessName">Business Name</label>
                <input
                    id="businessName"
                    type="text"
                    placeholder="Your Business Name"
                    value={data.businessName}
                    onChange={(e) => updateField('businessName', e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="businessAddress">Business Address</label>
                <textarea
                    id="businessAddress"
                    placeholder="123 Business Street, City, Country, ZIP"
                    rows={3}
                    value={data.businessAddress}
                    onChange={(e) => updateField('businessAddress', e.target.value)}
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="businessEmail">Email</label>
                    <input
                        id="businessEmail"
                        type="email"
                        placeholder="email@business.com"
                        value={data.businessEmail}
                        onChange={(e) => updateField('businessEmail', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="businessPhone">Phone</label>
                    <input
                        id="businessPhone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={data.businessPhone}
                        onChange={(e) => updateField('businessPhone', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default BusinessDetails;
