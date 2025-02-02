import React from "react";
import { useProject } from "../../context/ProjectProvider";
import { ALLOWED_EDITS } from "../../constants/constants";

function EditorPanel() {
    const { handleEditing, isEditing, handleSaveChanges } = useProject();

    return (
        <div className="h-full w-64 p-4 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Editor Panel</h2>
            <hr className="w-full mb-5 border-gray-700" />

            {/* Properties */}
            <div className="space-y-3 flex-1">
                {/* Color */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Color</label>
                    <input
                        type="color"
                        className="h-8 w-24 border rounded bg-gray-800"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(ALLOWED_EDITS.COLOR, e.target.value)
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Background Color */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                        Background Color
                    </label>
                    <input
                        type="color"
                        className="h-8 w-24 border rounded bg-gray-800"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.BACKGROUND_COLOR,
                                e.target.value
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Margin */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Margin (px)</label>
                    <input
                        type="number"
                        min={0}
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.MARGIN,
                                `${Number(e.target.value)}px`
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Padding */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Padding (px)</label>
                    <input
                        type="number"
                        min={0}
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.PADDING,
                                `${Number(e.target.value)}px`
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Border */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Border</label>
                    <select
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(ALLOWED_EDITS.BORDER, e.target.value)
                        }
                        disabled={!isEditing}
                    >
                        <option value="none">None</option>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="dotted">Dotted</option>
                    </select>
                </div>
                {/* Border size */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                        Border Size (px)
                    </label>
                    <input
                        type="number"
                        min={0}
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.BORDER_SIZE,
                                `${Number(e.target.value)}px`
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Border Radius */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                        Border Radius (px)
                    </label>
                    <input
                        type="number"
                        min={0}
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.BORDER_RADIUS,
                                `${Number(e.target.value)}px`
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Font Size */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                        Font Size (px)
                    </label>
                    <input
                        type="number"
                        min={2}
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.FONT_SIZE,
                                `${Number(e.target.value)}px`
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Font Weight */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Font Weight</label>
                    <select
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.FONT_WEIGHT,
                                e.target.value
                            )
                        }
                        disabled={!isEditing}
                    >
                        <option value="100">Thin</option>
                        <option value="200">Extra Light</option>
                        <option value="300">Light</option>
                        <option value="400">Normal</option>
                        <option value="500">Medium</option>
                        <option value="600">Semi Bold</option>
                        <option value="700">Bold</option>
                        <option value="800">Extra Bold</option>
                        <option value="900">Black</option>
                    </select>
                </div>
                {/* Opacity */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Opacity</label>
                    <select
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(ALLOWED_EDITS.OPACITY, e.target.value)
                        }
                        disabled={!isEditing}
                    >
                        <option value="1">100%</option>
                        <option value="0.9">90%</option>
                        <option value="0.8">80%</option>
                        <option value="0.7">70%</option>
                        <option value="0.6">60%</option>
                        <option value="0.5">50%</option>
                        <option value="0.4">40%</option>
                        <option value="0.3">30%</option>
                        <option value="0.2">20%</option>
                        <option value="0.1">10%</option>
                        <option value="0">0%</option>
                    </select>
                </div>
                {/* Width */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Width (px)</label>
                    <input
                        type="number"
                        min={0}
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.WIDTH,
                                `${Number(e.target.value)}px`
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Height */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Height (px)</label>
                    <input
                        type="number"
                        min={0}
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.HEIGHT,
                                `${Number(e.target.value)}px`
                            )
                        }
                        disabled={!isEditing}
                    />
                </div>
                {/* Text Align */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Text Align</label>
                    <select
                        className="h-8 w-24 border rounded p-1 bg-gray-800 text-white"
                        onChange={(e) =>
                            isEditing &&
                            handleEditing(
                                ALLOWED_EDITS.TEXT_ALIGN,
                                e.target.value
                            )
                        }
                        disabled={!isEditing}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
            </div>

            {/* Save Changes */}
            <button
                onClick={() => handleSaveChanges()}
                className="w-full p-3 border border-gray-700 rounded-lg hover:bg-gray-950 duration-150"
            >
                Save Changes
            </button>
        </div>
    );
}

export default EditorPanel;
