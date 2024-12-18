'use client';
import React, { useState, FormEvent } from 'react';
import { feedbackContent } from './content';
import { Section, SectionTitle } from '@/components/reusable/section/Section';
import { RatingInput } from './components/RatingInput';

export default function FeedbackSection() {
    const { formLabels, title, description } = feedbackContent;
    const [rating, setRating] = useState<number | null>(null);
    const [organization, setOrganization] = useState<number | null>(null);
    const [speaker, setSpeaker] = useState('');
    const [comments, setComments] = useState('');

    const [errors, setErrors] = useState<{ rating?: string; organization?: string }>({});

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate inputs
        const newErrors: typeof errors = {};
        if (!rating) newErrors.rating = 'Satisfaction Rating is required.';
        if (!organization) newErrors.organization = 'Event Organization Rating is required.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // Stop submission
        }

        // Prepare the form data
        const formData = {
        satisfactionRating: rating,
        organizationRating: organization,
        futureSpeakers: speaker,
        additionalComments: comments,
        };

        try {
            // Send data to Payload CMS
            const response = await fetch('http://localhost:3000/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Feedback submitted successfully!');
                // Clear form fields
                setRating(null);
                setOrganization(null);
                setSpeaker('');
                setComments('');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || 'Failed to submit feedback.'}`);
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('An error occurred. Please try again.');
        }

        // Clear errors and reset form
        //setErrors({});
        //alert('Feedback submitted!');
        //console.log({ rating, speaker, organization, comments });

        // Reset fields
        //setRating(null);
        //setOrganization(null);
        //setSpeaker('');
        //setComments('');
    };

    return (
        <Section id="feedback">
            <SectionTitle className="text-3xl font-bold mb-6">{title}</SectionTitle>
            <form onSubmit={handleSubmit}>
                {/* Description */}
                <div className="mb-8">
                    <p className="text-xl font-bold text-realiti-sand">{description}</p>
                </div>

                {/* Satisfaction Rating */}
                <div className="mb-8">
                    <label className="block mb-4 text-xl font-semibold text-reliti-dark-blue">{formLabels.rating}<span className="text-red-700 font-bold">*</span></label>
                    <RatingInput value={rating || 0} onChange={setRating} starSize={40} />
                    {errors.rating && (
                        <p className="text-red-500 text-sm mt-2">{errors.rating}</p>
                    )}
                </div>

                {/* Future Speaker Requests */}
                <div className="mb-8">
                    <label className="block mb-4 text-xl font-semibold text-reliti-dark-blue">{formLabels.speaker}</label>
                    <input
                        type="text"
                        value={speaker}
                        onChange={(e) => setSpeaker(e.target.value)}
                        placeholder="Enter future speaker requests"
                        className="w-full px-4 py-3 text-lg border border-realiti-blue rounded-lg focus:ring focus:ring-realiti-blue1"
                    />
                </div>

                {/* Event Organization Rating */}
                <div className="mb-8">
                    <label className="block mb-4 text-xl font-semibold text-reliti-dark-blue">{formLabels.organization} <span className="text-red-700 font-bold">*</span></label>
                    <RatingInput value={organization || 0} onChange={setOrganization} starSize={40} />
                    {errors.organization && (
                        <p className="text-red-500 text-sm mt-2">{errors.organization}</p>
                    )}
                </div>

                {/* Additional Comments */}
                <div className="mb-8">
                    <label className="block mb-4 text-xl font-semibold text-reliti-dark-blue">{formLabels.comments}</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        placeholder="Add your comments or suggestions"
                        rows={4}
                        className="w-full px-4 py-3 text-lg border border-realiti-blue rounded-lg focus:ring focus:ring-realiti-blue1"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-realiti-blue text-white text-xl font-bold py-4 px-6 rounded-lg hover:bg-realiti-blue2 transition-transform transform hover:scale-105"
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>
        </Section>
    );
}
